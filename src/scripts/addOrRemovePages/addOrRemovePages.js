import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Windows иногда выбрасывает EPERM/EBUSY при rename, если каталог/файл кратко занят.
 * Делаем несколько попыток с небольшими задержками.
 */
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
  // финальная попытка, чтобы сохранить оригинальную ошибку/стек
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
 * Возвращает список индексов страниц, которые реально есть в pagesPath:
 * [0,1,2,...]
 */
function getExistingPageIndexes(pagesPath) {
  const dirs = fs.readdirSync(pagesPath, { withFileTypes: true });
  const indexes = dirs
    .filter((d) => d.isDirectory())
    .map((d) => d.name.match(/^Page(\d+)$/))
    .filter(Boolean)
    .map((m) => Number(m[1]))
    .filter((n) => Number.isFinite(n))
    .sort((a, b) => a - b);

  return indexes;
}

/**
 * Меняет индекс страницы внутри папки PageX:
 * - PageOLD.tsx -> PageNEW.tsx
 * - export const PageOLD -> export const PageNEW
 * - index.ts: import/export/default под новый номер
 */
function changeIndexOfPage(folderPath, newIndex) {
  const indexPath = path.join(folderPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`No index.ts in ${folderPath}`);
  }

  const pageFile = fs
    .readdirSync(folderPath)
    .find((f) => /^Page\d+\.tsx$/i.test(f));

  if (!pageFile) {
    throw new Error(`No Page*.tsx in ${folderPath}`);
  }

  const oldIndex = Number(pageFile.match(/^Page(\d+)\.tsx$/i)[1]);

  const pagePathOld = path.join(folderPath, pageFile);
  const pagePathNew = path.join(folderPath, `Page${newIndex}.tsx`);

  // 1) правим Page*.tsx
  const pageSrc = fs.readFileSync(pagePathOld, 'utf8');

  // твой формат: export const Page19 = ...
  // заменяем только идентификатор компонента
  const pageFixed = pageSrc.replace(
    /\bexport\s+const\s+Page\d+\b/g,
    `export const Page${newIndex}`
  );

  fs.writeFileSync(pagePathOld, pageFixed);

  // 2) правим index.ts (сохраняем default export)
  const indexSrc = fs.readFileSync(indexPath, 'utf8');

  const indexFixed = indexSrc
    // import { Page19 } from './Page19';
    .replace(
      /import\s+\{\s*Page\d+\s*\}\s+from\s+'\.\/Page\d+'\s*;\s*/g,
      `import { Page${newIndex} } from './Page${newIndex}';\n`
    )
    // export { Page19 };
    .replace(
      /export\s+\{\s*Page\d+\s*\}\s*;\s*/g,
      `export { Page${newIndex} };\n`
    )
    // export default Page19;
    .replace(
      /export\s+default\s+Page\d+\s*;/g,
      `export default Page${newIndex};`
    );

  fs.writeFileSync(indexPath, indexFixed);

  // 3) переименовываем Page*.tsx
  if (pagePathOld !== pagePathNew) {
    renameSyncWithRetry(pagePathOld, pagePathNew);
  }

  // sanity: в папке Page{newIndex} можно оставить имя папки как есть —
  // оно управляется снаружи (add/remove). Здесь только файлы.
  return { oldIndex, newIndex };
}

/**
 * ADD:
 * Сдвигаем страницы начиная с indexStart на +amount, идя с конца,
 * потом создаём новые страницы в дырке [indexStart, indexStart+amount-1].
 */
function addPages(root, indexStart, amount) {
  const pagesPath = path.join(process.cwd(), root);

  if (!fs.existsSync(pagesPath)) {
    throw new Error(`Pages path not found: ${pagesPath}`);
  }

  const indexes = getExistingPageIndexes(pagesPath);
  if (indexes.length === 0) {
    throw new Error(`No Page* folders found in: ${pagesPath}`);
  }

  const maxIndex = indexes[indexes.length - 1];
  const expectedCount = maxIndex + 1;

  // optional strictness: проверим, что нет дырок
  if (indexes.length !== expectedCount) {
    throw new Error(
      `Pages are not continuous (0..${maxIndex}). Found: ${indexes.join(', ')}`
    );
  }

  if (indexStart < 0 || indexStart > expectedCount) {
    throw new Error(`indexStart out of range. Got ${indexStart}, pages=${expectedCount}`);
  }

  if (amount <= 0) {
    throw new Error(`amount must be > 0. Got ${amount}`);
  }

  // 1) сдвиг хвоста
  for (let i = maxIndex; i >= indexStart; i--) {
    const oldDir = path.join(pagesPath, `Page${i}`);
    const newDir = path.join(pagesPath, `Page${i + amount}`);

    renameSyncWithRetry(oldDir, newDir);

    // обновим содержимое файлов под новый индекс
    changeIndexOfPage(newDir, i + amount);
  }

  // 2) создаём новые страницы из шаблона
  const templateDir = path.join(__dirname, 'pageTemplate');
  if (!fs.existsSync(templateDir)) {
    throw new Error(`Template folder not found: ${templateDir}`);
  }

  for (let i = indexStart; i < indexStart + amount; i++) {
    const newDir = path.join(pagesPath, `Page${i}`);

    fs.cpSync(templateDir, newDir, { recursive: true });

    changeIndexOfPage(newDir, i);
  }
}

/**
 * REMOVE:
 * Удаляем диапазон [indexStart, indexStart+amount-1],
 * затем сдвигаем хвост влево на amount.
 */
function removePages(root, indexStart, amount) {
  const pagesPath = path.join(process.cwd(), root);

  if (!fs.existsSync(pagesPath)) {
    throw new Error(`Pages path not found: ${pagesPath}`);
  }

  const indexes = getExistingPageIndexes(pagesPath);
  if (indexes.length === 0) {
    throw new Error(`No Page* folders found in: ${pagesPath}`);
  }

  const maxIndex = indexes[indexes.length - 1];
  const expectedCount = maxIndex + 1;

  if (indexes.length !== expectedCount) {
    throw new Error(
      `Pages are not continuous (0..${maxIndex}). Found: ${indexes.join(', ')}`
    );
  }

  if (amount <= 0) {
    throw new Error(`amount must be > 0. Got ${amount}`);
  }

  if (indexStart < 0 || indexStart >= expectedCount) {
    throw new Error(`indexStart out of range. Got ${indexStart}, pages=${expectedCount}`);
  }

  if (indexStart + amount > expectedCount) {
    throw new Error(
      `Cannot remove ${amount} pages from ${indexStart}. Total pages = ${expectedCount}`
    );
  }

  // 1) удаляем блок
  for (let i = indexStart; i < indexStart + amount; i++) {
    const dir = path.join(pagesPath, `Page${i}`);
    rmSyncWithRetry(dir);
  }

  // 2) сдвигаем хвост
  // было: i = indexStart+amount ... maxIndex
  // станет: i-amount
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

Examples:
  node ./scripts/addOrRemovePages.js ./src/pages add 1 1
  node ./scripts/addOrRemovePages.js ./src/pages remove 5 2
`);
  process.exit(1);
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

  if (action === 'add') {
    addPages(root, indexStart, amount);
  } else {
    removePages(root, indexStart, amount);
  }

  console.log(`Done: ${action} ${amount} page(s) at index ${indexStart}`);
}

try {
  main();
} catch (e) {
  console.error(e?.stack || e);
  process.exit(1);
}
