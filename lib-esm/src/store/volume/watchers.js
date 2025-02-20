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
import { Howler } from 'howler';
import { getAudioInstances } from 'utils/effects/audio/getAudioInstances';
import { actions } from './slice';
import { selectors } from './selectors';
function saveInLocalStorage() {
    var volume, volumeAsJson;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, select(selectors.all)];
            case 1:
                volume = _a.sent();
                volumeAsJson = JSON.stringify(volume);
                localStorage.setItem('volume', volumeAsJson);
                return [2 /*return*/];
        }
    });
}
export function watchSetAll(action) {
    var payload, global, bg, music, sfx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                global = payload.global, bg = payload.bg, music = payload.music, sfx = payload.sfx;
                return [4 /*yield*/, call(function () {
                        Howler.volume(global / 100);
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, put(actions.setGlobal(global))];
            case 2:
                _a.sent();
                return [4 /*yield*/, put(actions.setSfx(sfx))];
            case 3:
                _a.sent();
                return [4 /*yield*/, put(actions.setMusic(music))];
            case 4:
                _a.sent();
                return [4 /*yield*/, put(actions.setBg(bg))];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
export function watchSetGlobal(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, call(function () {
                        // todo: video volume also need to be changed
                        Howler.volume(payload / 100);
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, call(saveInLocalStorage)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function setVolumeByType(type, volume) {
    var setVolume = function (audioInstances) {
        Object.values(audioInstances).forEach(function (audioInstanceCur) {
            if (!audioInstanceCur) {
                return;
            }
            if (audioInstanceCur.type === type) {
                audioInstanceCur.volume(volume / 100);
            }
        });
    };
    var _a = getAudioInstances(), audioInstances = _a.audioInstances, audioBgInstances = _a.audioBgInstances;
    setVolume(audioInstances);
    setVolume(audioBgInstances);
}
export function watchSetBg(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, call(function () {
                        setVolumeByType('bg', payload);
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, call(saveInLocalStorage)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
export function watchSetSfx(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, call(function () {
                        setVolumeByType('sfx', payload);
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, call(saveInLocalStorage)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
export function watchSetMusic(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, call(function () {
                        setVolumeByType('music', payload);
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, call(saveInLocalStorage)];
            case 2:
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
                return [4 /*yield*/, takeLatest(actions.setGlobal, watchSetGlobal)];
            case 2:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setBg, watchSetBg)];
            case 3:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setSfx, watchSetSfx)];
            case 4:
                _a.sent();
                return [4 /*yield*/, takeLatest(actions.setMusic, watchSetMusic)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
//# sourceMappingURL=watchers.js.map