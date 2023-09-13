import { getInitValues } from 'utils/effects/achievements/utils';
import { encryptStorage } from './encryptStorage';
var key = 'achievements';
function get(name) {
    var values = encryptStorage.getItem(key);
    if (!values) {
        return false;
    }
    return values[name];
}
function getAll() {
    return encryptStorage.getItem(key);
}
function set(name, value) {
    var values = encryptStorage.getItem(key);
    values[name] = value;
    encryptStorage.setItem(key, values);
}
function setAll(values) {
    encryptStorage.setItem(key, values);
}
function init() {
    var values = getInitValues();
    encryptStorage.setItem(key, values);
}
export var achievements = {
    set: set,
    setAll: setAll,
    get: get,
    getAll: getAll,
    key: key,
    init: init,
};
//# sourceMappingURL=achievements.js.map