import { encryptStorage } from './encryptStorage';
var key = 'seenAuthorComments';
function get() {
    return encryptStorage.getItem(key);
}
function add() {
    var seenAuthorCommentsFromLocalStorage = get() || 0;
    var newSeenAuthorComments = seenAuthorCommentsFromLocalStorage + 1;
    set(newSeenAuthorComments);
}
function set(values) {
    encryptStorage.setItem(key, values);
}
export var seenAuthorComments = {
    add: add,
    set: set,
    get: get,
    key: key,
};
//# sourceMappingURL=seenAuthorComments.js.map