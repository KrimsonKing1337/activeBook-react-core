const path = require('path');
const fs = require('fs');

/** @param folderPath string
 *  @param index number
 * */
function changeIndexOfPage(folderPath, index) {
  const files = fs.readdirSync(folderPath);

  const pathToIndexFile = path.join(folderPath, files[0]);
  const pathToPageFile = path.join(folderPath, files[1]);

  const dataOfPageFile = fs.readFileSync(pathToPageFile).toString();
  const newDataOfPageFile = dataOfPageFile.replace(
    /const Page(\d+)?/g,
    `const Page${index}`
  );

  fs.writeFileSync(pathToPageFile, newDataOfPageFile);
  fs.writeFileSync(pathToIndexFile, `export { Page${index} } from './Page${index}';\n`);

  const newPathFoPageFile = path.join(folderPath, `Page${index}.tsx`);

  fs.renameSync(pathToPageFile, newPathFoPageFile);
}

/**
 * @param root string
 * @param indexStart number
 * @param amount number
 * */
function addPages(root, indexStart, amount) {
  const pathToPages = path.join(process.cwd(), root);

  const amountOfPages = fs.readdirSync(pathToPages).length;

  for (let index = amountOfPages - 1; index >= 0; index--) {
    const dirPath = path.join(pathToPages, `Page${index}`);

    const newIndex = index + amount;

    const newDirPath = path.join(pathToPages, `Page${newIndex}`);

    fs.renameSync(dirPath, newDirPath);

    const pageFilePath = path.join(newDirPath, `Page${index}.tsx`);
    const newPageFilePath = path.join(newDirPath, `Page${newIndex}.tsx`);

    fs.renameSync(pageFilePath, newPageFilePath);

    changeIndexOfPage(newDirPath, newIndex);
  }

  for (let index = indexStart; index < amount; index++) {
    const defaultPageFolderPath = path.join(__dirname, './pageTemplate');

    const newPageFolderPath = path.join(pathToPages, `Page${index}`);

    fs.cpSync(
      path.join(defaultPageFolderPath),
      path.join(newPageFolderPath),
      { recursive: true },
    );

    changeIndexOfPage(newPageFolderPath, index);
  }
}

/**
 * @param root string
 * @param indexStart number
 * @param amount number
 * */
function removePages(root, indexStart, amount) {
  const pathToPages = path.join(process.cwd(), root);

  const amountOfPages = fs.readdirSync(pathToPages).length;

  if (indexStart + amount > amountOfPages) {
    console.error('Amount param is incorrect');

    process.exit(-1);

    return;
  }

  for (let index = indexStart; index < amount; index++) {
    const dirPath = path.join(pathToPages, `Page${index}`);

    fs.rmSync(dirPath,{ recursive: true });
  }

  const newAmountOfPages = fs.readdirSync(pathToPages).length;

  for (let index = amount; index <= newAmountOfPages + 1; index++) {
    const dirPath = path.join(pathToPages, `Page${index}`);

    const newIndex = index - indexStart;
    const newDirPath = path.join(pathToPages, `Page${newIndex}`);

    fs.renameSync(dirPath, newDirPath);

    changeIndexOfPage(newDirPath, newIndex);
  }
}

function main() {
  const path = process.argv[2];
  const action = process.argv[3];
  const indexStart = Number(process.argv[4]);
  const amount = Number(process.argv[5]);

  if (process.argv.length < 6) {
    console.error('Wrong amount of arguments');

    process.exit(-1);
    return;
  }

  if (action !== 'add' && action !== 'remove') {
    console.error('Action argument must be \'add\' or \'remove\'');

    process.exit(-1);
    return;
  }

  if (indexStart < 0) {
    console.error('IndexStart argument can\'t be lower than zero');

    process.exit(-1);
    return;
  }

  if (action === 'add') {
    addPages(path, indexStart, amount);
  } else if (action === 'remove') {
    removePages(path, indexStart, amount);
  }
}

main();
