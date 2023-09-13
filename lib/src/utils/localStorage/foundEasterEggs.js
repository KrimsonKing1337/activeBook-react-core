"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.foundEasterEggs = void 0;
var encryptStorage_1 = require("./encryptStorage");
var key = 'foundEasterEggs';
function get() {
    return encryptStorage_1.encryptStorage.getItem(key);
}
function set(value) {
    var _a;
    var foundEasterEggsFromLocalStorage = get();
    var newEasterEggs = __assign(__assign({}, foundEasterEggsFromLocalStorage), (_a = {}, _a[value] = true, _a));
    setAll(newEasterEggs);
}
function setAll(values) {
    encryptStorage_1.encryptStorage.setItem(key, values);
}
exports.foundEasterEggs = {
    set: set,
    setAll: setAll,
    get: get,
    key: key,
};
//# sourceMappingURL=foundEasterEggs.js.map