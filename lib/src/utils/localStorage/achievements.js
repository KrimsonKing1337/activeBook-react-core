"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievements = void 0;
var utils_1 = require("../effects/achievements/utils");
var encryptStorage_1 = require("./encryptStorage");
var key = 'achievements';
function get(name) {
    var values = encryptStorage_1.encryptStorage.getItem(key);
    if (!values) {
        return false;
    }
    return values[name];
}
function getAll() {
    return encryptStorage_1.encryptStorage.getItem(key);
}
function set(name, value) {
    var values = encryptStorage_1.encryptStorage.getItem(key);
    values[name] = value;
    encryptStorage_1.encryptStorage.setItem(key, values);
}
function setAll(values) {
    encryptStorage_1.encryptStorage.setItem(key, values);
}
function init() {
    var values = (0, utils_1.getInitValues)();
    encryptStorage_1.encryptStorage.setItem(key, values);
}
exports.achievements = {
    set: set,
    setAll: setAll,
    get: get,
    getAll: getAll,
    key: key,
    init: init,
};
//# sourceMappingURL=achievements.js.map