var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { encryptStorage } from './encryptStorage';
var key = 'seenPages';
function get() {
    return encryptStorage.getItem(key);
}
function set(value) {
    var _a;
    var seenPagesFromLocalStorage = get();
    var newSeenPages = __assign(__assign({}, seenPagesFromLocalStorage), (_a = {}, _a[value] = true, _a));
    setAll(newSeenPages);
}
function setAll(values) {
    encryptStorage.setItem(key, values);
}
export var seenPages = {
    set: set,
    setAll: setAll,
    get: get,
    key: key,
};
//# sourceMappingURL=seenPages.js.map