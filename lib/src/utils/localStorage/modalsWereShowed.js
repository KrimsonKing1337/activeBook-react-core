"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalsWereShowed = exports.Flags = void 0;
var encryptStorage_1 = require("./encryptStorage");
var key = 'modalsWereShowed';
var Flags;
(function (Flags) {
    Flags["usingCamera"] = "usingCamera";
    Flags["inverseColor"] = "inverseColor";
})(Flags || (exports.Flags = Flags = {}));
function get(name) {
    var valuesAsJson = localStorage.getItem(key);
    if (!valuesAsJson) {
        return false;
    }
    var modals = JSON.parse(valuesAsJson);
    return modals[name];
}
function getAll() {
    return encryptStorage_1.encryptStorage.getItem(key);
}
function set(name, value) {
    var _a;
    var values = localStorage.getItem(key);
    var newValues = (_a = {},
        _a[Flags.usingCamera] = false,
        _a[Flags.inverseColor] = false,
        _a);
    if (values) {
        newValues = JSON.parse(values);
    }
    newValues[name] = value;
    var newValuesAsJson = JSON.stringify(newValues);
    localStorage.setItem(key, newValuesAsJson);
}
function setAll(values) {
    encryptStorage_1.encryptStorage.setItem(key, values);
}
exports.modalsWereShowed = {
    set: set,
    setAll: setAll,
    get: get,
    getAll: getAll,
    key: key,
};
//# sourceMappingURL=modalsWereShowed.js.map