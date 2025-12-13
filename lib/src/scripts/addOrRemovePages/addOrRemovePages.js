"use strict";
var path = require('path');
var fs = require('fs');
/** @param folderPath string
 *  @param index number
 * */
function changeIndexOfPage(folderPath, index) {
    var files = fs.readdirSync(folderPath);
    var pathToIndexFile = path.join(folderPath, files[0]);
    var pathToPageFile = path.join(folderPath, files[1]);
    var dataOfPageFile = fs.readFileSync(pathToPageFile).toString();
    var newDataOfPageFile = dataOfPageFile.replace(/const Page(\d+)?/g, "const Page".concat(index));
    fs.writeFileSync(pathToPageFile, newDataOfPageFile);
    fs.writeFileSync(pathToIndexFile, "export { Page".concat(index, " } from './Page").concat(index, "';\n"));
    var newPathFoPageFile = path.join(folderPath, "Page".concat(index, ".tsx"));
    fs.renameSync(pathToPageFile, newPathFoPageFile);
}
/**
 * @param root string
 * @param indexStart number
 * @param amount number
 * */
function addPages(root, indexStart, amount) {
    var pathToPages = path.join(process.cwd(), root);
    var amountOfPages = fs.readdirSync(pathToPages).length;
    for (var index = amountOfPages - 1; index >= 0; index--) {
        var dirPath = path.join(pathToPages, "Page".concat(index));
        var newIndex = index + amount;
        var newDirPath = path.join(pathToPages, "Page".concat(newIndex));
        fs.renameSync(dirPath, newDirPath);
        var pageFilePath = path.join(newDirPath, "Page".concat(index, ".tsx"));
        var newPageFilePath = path.join(newDirPath, "Page".concat(newIndex, ".tsx"));
        fs.renameSync(pageFilePath, newPageFilePath);
        changeIndexOfPage(newDirPath, newIndex);
    }
    for (var index = indexStart; index < amount; index++) {
        var defaultPageFolderPath = path.join(__dirname, './pageTemplate');
        var newPageFolderPath = path.join(pathToPages, "Page".concat(index));
        fs.cpSync(path.join(defaultPageFolderPath), path.join(newPageFolderPath), { recursive: true });
        changeIndexOfPage(newPageFolderPath, index);
    }
}
/**
 * @param root string
 * @param indexStart number
 * @param amount number
 * */
function removePages(root, indexStart, amount) {
    var pathToPages = path.join(process.cwd(), root);
    var amountOfPages = fs.readdirSync(pathToPages).length;
    if (indexStart + amount > amountOfPages) {
        console.error('Amount param is incorrect');
        process.exit(-1);
        return;
    }
    for (var index = indexStart; index < amount; index++) {
        var dirPath = path.join(pathToPages, "Page".concat(index));
        fs.rmSync(dirPath, { recursive: true });
    }
    var newAmountOfPages = fs.readdirSync(pathToPages).length;
    for (var index = amount; index <= newAmountOfPages + 1; index++) {
        var dirPath = path.join(pathToPages, "Page".concat(index));
        var newIndex = index - indexStart;
        var newDirPath = path.join(pathToPages, "Page".concat(newIndex));
        fs.renameSync(dirPath, newDirPath);
        changeIndexOfPage(newDirPath, newIndex);
    }
}
function main() {
    var path = process.argv[2];
    var action = process.argv[3];
    var indexStart = Number(process.argv[4]);
    var amount = Number(process.argv[5]);
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
    }
    else if (action === 'remove') {
        removePages(path, indexStart, amount);
    }
}
main();
//# sourceMappingURL=addOrRemovePages.js.map