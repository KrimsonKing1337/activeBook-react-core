import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

function renameSyncWithRetry(from, to, attempts = 10) {
  for (let i = 0; i < attempts; i++) {
    try {
      fs.renameSync(from, to);
      return;
    } catch (e) {
      const code = e?.code;
      if (code === 'EPERM' || code === 'EBUSY' || code === 'EACCES') {
        sleep(25 + i * 15);
        continue;
      }
      throw e;
    }
  }
  fs.renameSync(from, to);
}

function rmSyncWithRetry(target, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      fs.rmSync(target, { recursive: true, force: true });
      return;
    } catch (e) {
      const code = e?.code;
      if (code === 'EPERM' || code === 'EBUSY' || code === 'EACCES') {
        sleep(25 + i * 15);
        continue;
      }
      throw e;
    }
  }
  fs.rmSync(target, { recursive: true, force: true });
}

function ensureInt(name, v) {
  if (!Number.isInteger(v) || Number.isNaN(v)) {
    throw new Error(`${name} must be an integer. Got: ${v}`);
  }
}

/**
 * Возвращает существующие папки Page<number> как числа, отсортированные.
 * Не требует, чтобы был Page0.
 */
function getExistingPageIndexes(pagesPath) {
  const dirs = fs.readdirSync(pagesPath, { withFileTypes: true });

  const indexes = [];
  for (const d of dirs) {
    if (!d.isDirectory()) continue;
    const m = /^Page(\d+)$/.exec(d.name);
    if (!m) continue;
    indexes.push(Number(m[1]));
  }

  indexes.sort((a, b) => a - b);
  return indexes;
}


/**
 * Внутри папки PageX ищем:
 * - index.ts
 * - файл страницы: либо Page<number>.tsx, либо Page.tsx
 *
 * Приводим к виду:
 * - Page{newIndex}.tsx
 * - export const Page{newIndex}
 * - index.ts с import/export/default
 */
function changeIndexOfPage(folderPath, newIndex) {
  const indexPath = path.join(folderPath, 'index.ts');
  if (!exists(indexPath)) {
    throw new Error(`No index.ts in ${folderPath}`);
  }

  const files = fs.readdirSync(folderPath);

  // 1) предпочитаем Page<number>.tsx
  let pageFile =
    files.find(f => /^Page\d+\.tsx$/i.test(f)) ??
    files.find(f => /^Page\.tsx$/i.test(f));

  if (!pageFile) {
    throw new Error(`No Page*.tsx (Page.tsx or PageN.tsx) in ${folderPath}`);
  }

  const pagePathOld = path.join(folderPath, pageFile);
  const pagePathNew = path.join(folderPath, `Page${newIndex}.tsx`);

  // правим Page*.tsx
  const pageSrc = fs.readFileSync(pagePathOld, 'utf8');

  // поддержим оба шаблона:
  // export const Page = ...
  // export const Page19 = ...
  let pageFixed = pageSrc
    .replace(/\bexport\s+const\s+Page\d+\b/g, `export const Page${newIndex}`)
    .replace(/\bexport\s+const\s+Page\b/g, `export const Page${newIndex}`);

  fs.writeFileSync(pagePathOld, pageFixed);

  // правим index.ts под твой формат (named + default)
  const indexSrc = fs.readFileSync(indexPath, 'utf8');

  const indexFixed = indexSrc
    .replace(
      /import\s+\{\s*Page\d+\s*\}\s+from\s+'\.\/Page\d+'\s*;\s*/g,
      `import { Page${newIndex} } from './Page${newIndex}';\n`
    )
    // если вдруг в шаблоне import { Page } from './Page';
    .replace(
      /import\s+\{\s*Page\s*\}\s+from\s+'\.\/Page'\s*;\s*/g,
      `import { Page${newIndex} } from './Page${newIndex}';\n`
    )
    .replace(
      /export\s+\{\s*Page\d+\s*\}\s*;\s*/g,
      `export { Page${newIndex} };\n`
    )
    .replace(
      /export\s+\{\s*Page\s*\}\s*;\s*/g,
      `export { Page${newIndex} };\n`
    )
    .replace(
      /export\s+default\s+Page\d+\s*;/g,
      `export default Page${newIndex};`
    )
    .replace(
      /export\s+default\s+Page\s*;/g,
      `export default Page${newIndex};`
    );

  fs.writeFileSync(indexPath, indexFixed);

  // переименование Page*.tsx
  if (pagePathOld !== pagePathNew) {
    renameSyncWithRetry(pagePathOld, pagePathNew);
  }
}

/**
 * ADD:
 * - если indexStart внутри существующего диапазона: сдвигаем хвост вправо и вставляем
 * - если indexStart == (max+1): просто добавляем в конец
 *
 * Важно: новые страницы создаём через tmp-папку, чтобы никогда не затирать существующую.
 */
function addPages(root, indexStart, amount) {
  const pagesPath = resolvePagesPath(root);
  if (!exists(pagesPath)) throw new Error(`Pages path not found: ${pagesPath}`);

  const indexes = getExistingPageIndexes(pagesPath);
  if (indexes.length === 0) {
    throw new Error(`No Page<number> folders found in: ${pagesPath}`);
  }

  const maxIndex = indexes[indexes.length - 1];

  if (amount <= 0) throw new Error(`amount must be > 0. Got ${amount}`);
  if (indexStart < 0) throw new Error(`indexStart must be >= 0. Got ${indexStart}`);

  // Шаблон
  const templateDir = path.join(__dirname, 'pageTemplate');
  if (!exists(templateDir)) throw new Error(`Template folder not found: ${templateDir}`);

  // 1) Сдвиг хвоста: только если вставляем "внутрь"
  // Если indexStart > maxIndex+1 — это дырка за пределами конца (не поддерживаем)
  if (indexStart > maxIndex + 1) {
    throw new Error(
      `indexStart=${indexStart} is too large. Max existing page is Page${maxIndex}. ` +
      `You can add at most at ${maxIndex + 1} (append).`
    );
  }

  if (indexStart <= maxIndex) {
    for (let i = maxIndex; i >= indexStart; i--) {
      const oldDir = path.join(pagesPath, `Page${i}`);
      const newDir = path.join(pagesPath, `Page${i + amount}`);
      renameSyncWithRetry(oldDir, newDir);
      changeIndexOfPage(newDir, i + amount);
    }
  }

  // 2) Создание новых страниц (дырка)
  for (let i = indexStart; i < indexStart + amount; i++) {
    const targetDir = path.join(pagesPath, `Page${i}`);
    if (exists(targetDir)) {
      throw new Error(
        `BUG: target directory already exists after shift: ${targetDir}. ` +
        `Refusing to overwrite.`
      );
    }

    const tmpDir = path.join(pagesPath, `__tmp_Page${i}_${Date.now()}_${Math.random().toString(16).slice(2)}`);
    fs.cpSync(templateDir, tmpDir, { recursive: true });

    changeIndexOfPage(tmpDir, i);
    renameSyncWithRetry(tmpDir, targetDir);
  }
}

/**
 * REMOVE:
 * удаляем [indexStart..indexStart+amount-1], потом сдвигаем хвост влево.
 */
function removePages(root, indexStart, amount) {
  const pagesPath = resolvePagesPath(root);
  if (!exists(pagesPath)) throw new Error(`Pages path not found: ${pagesPath}`);

  const indexes = getExistingPageIndexes(pagesPath);
  if (indexes.length === 0) {
    throw new Error(`No Page<number> folders found in: ${pagesPath}`);
  }

  const maxIndex = indexes[indexes.length - 1];

  if (amount <= 0) throw new Error(`amount must be > 0. Got ${amount}`);
  if (indexStart < 0) throw new Error(`indexStart must be >= 0. Got ${indexStart}`);

  if (indexStart > maxIndex) {
    throw new Error(`indexStart=${indexStart} out of range. Max is ${maxIndex}`);
  }
  if (indexStart + amount - 1 > maxIndex) {
    throw new Error(
      `Cannot remove pages ${indexStart}..${indexStart + amount - 1}. Max is ${maxIndex}`
    );
  }

  // 1) удалить блок
  for (let i = indexStart; i < indexStart + amount; i++) {
    rmSyncWithRetry(path.join(pagesPath, `Page${i}`));
  }

  // 2) сдвинуть хвост влево
  for (let i = indexStart + amount; i <= maxIndex; i++) {
    const oldDir = path.join(pagesPath, `Page${i}`);
    const newDir = path.join(pagesPath, `Page${i - amount}`);
    renameSyncWithRetry(oldDir, newDir);
    changeIndexOfPage(newDir, i - amount);
  }
}

function usageAndExit() {
  console.error(`Usage:
  node ./scripts/addOrRemovePages.js ./src/pages add <indexStart> <amount>
  node ./scripts/addOrRemovePages.js ./src/pages remove <indexStart> <amount>
`);
  process.exit(1);
}

function findProjectRoot(startDir) {
  let dir = startDir;
  while (true) {
    const pkg = path.join(dir, 'package.json');
    const src = path.join(dir, 'src');
    if (fs.existsSync(pkg) && fs.existsSync(src)) return dir;

    const parent = path.dirname(dir);
    if (parent === dir) return null; // дошли до корня диска
    dir = parent;
  }
}

function resolvePagesPath(rootArg) {
  // сначала пробуем cwd
  const candidate1 = path.resolve(process.cwd(), rootArg);
  if (fs.existsSync(candidate1)) return candidate1;

  // потом пробуем найти корень проекта вверх от cwd
  const projectRoot = findProjectRoot(process.cwd());
  if (projectRoot) {
    const candidate2 = path.resolve(projectRoot, rootArg);
    if (fs.existsSync(candidate2)) return candidate2;
  }

  throw new Error(
    `Pages path not found. Tried:\n` +
    `- ${candidate1}\n` +
    (projectRoot ? `- ${path.resolve(projectRoot, rootArg)}\n` : '') +
    `\nCurrent cwd: ${process.cwd()}`
  );
}


function main() {
  if (process.argv.length < 6) usageAndExit();

  const root = process.argv[2];
  const action = process.argv[3];
  const indexStart = Number(process.argv[4]);
  const amount = Number(process.argv[5]);

  ensureInt('indexStart', indexStart);
  ensureInt('amount', amount);

  if (action !== 'add' && action !== 'remove') {
    throw new Error(`Action must be 'add' or 'remove'. Got: ${action}`);
  }

  if (action === 'add') addPages(root, indexStart, amount);
  else removePages(root, indexStart, amount);

  console.log(`Done: ${action} ${amount} page(s) at index ${indexStart}`);
}

try {
  main();
} catch (e) {
  console.error(e?.stack || e);
  process.exit(1);
}
