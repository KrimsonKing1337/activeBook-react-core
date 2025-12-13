import { encryptStorage } from './encryptStorage';
var key = 'modalsWereShowed';
export var Flags;
(function (Flags) {
    Flags["usingCamera"] = "usingCamera";
    Flags["inverseColor"] = "inverseColor";
})(Flags || (Flags = {}));
function get(name) {
    var valuesAsJson = localStorage.getItem(key);
    if (!valuesAsJson) {
        return false;
    }
    var modals = JSON.parse(valuesAsJson);
    return modals[name];
}
function getAll() {
    return encryptStorage.getItem(key);
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
    encryptStorage.setItem(key, values);
}
export var modalsWereShowed = {
    set: set,
    setAll: setAll,
    get: get,
    getAll: getAll,
    key: key,
};
//# sourceMappingURL=modalsWereShowed.js.map