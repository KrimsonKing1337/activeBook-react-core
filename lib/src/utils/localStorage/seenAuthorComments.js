"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seenAuthorComments = void 0;
var encryptStorage_1 = require("./encryptStorage");
var key = 'seenAuthorComments';
function get() {
    return encryptStorage_1.encryptStorage.getItem(key);
}
function add() {
    var seenAuthorCommentsFromLocalStorage = get() || 0;
    var newSeenAuthorComments = seenAuthorCommentsFromLocalStorage + 1;
    set(newSeenAuthorComments);
}
function set(values) {
    encryptStorage_1.encryptStorage.setItem(key, values);
}
exports.seenAuthorComments = {
    add: add,
    set: set,
    get: get,
    key: key,
};
//# sourceMappingURL=seenAuthorComments.js.map