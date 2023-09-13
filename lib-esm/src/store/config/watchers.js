var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { setThemeCss } from 'utils/styles/setThemeCss';
import { actions } from './slice';
import { selectors } from './selectors';
function saveInLocalStorage() {
    var config, configAsJson;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, select(selectors.all)];
            case 1:
                config = _a.sent();
                configAsJson = JSON.stringify(config);
                localStorage.setItem('config', configAsJson);
                return [2 /*return*/];
        }
    });
}
export function watchSetAll(action) {
    var payload, theme, fontSize, flashlight, vibration, lineHeight, authorComments;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                theme = payload.theme, fontSize = payload.fontSize, flashlight = payload.flashlight, vibration = payload.vibration, lineHeight = payload.lineHeight, authorComments = payload.authorComments;
                return [4 /*yield*/, put(actions.setAuthorComments(authorComments))];
            case 1:
                _a.sent();
                return [4 /*yield*/, put(actions.setFontSize(fontSize))];
            case 2:
                _a.sent();
                return [4 /*yield*/, put(actions.setFlashlight(flashlight))];
            case 3:
                _a.sent();
                return [4 /*yield*/, put(actions.setVibration(vibration))];
            case 4:
                _a.sent();
                return [4 /*yield*/, put(actions.setLineHeight(lineHeight))];
            case 5:
                _a.sent();
                return [4 /*yield*/, call(function () { return setThemeCss(theme); })];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
export function watchSetTheme(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, call(function () { return setThemeCss(payload); })];
            case 1:
                _a.sent();
                return [4 /*yield*/, call(saveInLocalStorage)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
export function watchSetEtc() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, call(saveInLocalStorage)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
export function watchActions() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeLatest(actions.setAll, watchSetAll)];
            case 1:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setTheme, watchSetTheme)];
            case 2:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setAuthorComments, watchSetEtc)];
            case 3:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setFlashlight, watchSetEtc)];
            case 4:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setFontSize, watchSetEtc)];
            case 5:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setLineHeight, watchSetEtc)];
            case 6:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setVibration, watchSetEtc)];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
//# sourceMappingURL=watchers.js.map