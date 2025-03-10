"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchActions = exports.watchSetVideos = exports.watchSetMusic = exports.watchSetSfx = exports.watchSetBg = exports.watchSetGlobal = exports.watchSetAll = void 0;
var effects_1 = require("redux-saga/effects");
var getAudioInstances_1 = require("../../utils/effects/audio/getAudioInstances");
var slice_1 = require("./slice");
var selectors_1 = require("./selectors");
var utils_1 = require("./utils");
function watchSetAll(action) {
    var payload, global, bg, music, sfx, videos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                global = payload.global, bg = payload.bg, music = payload.music, sfx = payload.sfx, videos = payload.videos;
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setSfx(sfx))];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setMusic(music))];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setBg(bg))];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setVideos(videos))];
            case 4:
                _a.sent();
                // сначала устанавливаем значения для каждой категории отдельно, затем применяем к ним громкость от global
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setGlobal(global))];
            case 5:
                // сначала устанавливаем значения для каждой категории отдельно, затем применяем к ним громкость от global
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetAll = watchSetAll;
function watchSetGlobal(action) {
    var payload, volumeAll, sfx, bg, music, videos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.all)];
            case 1:
                volumeAll = _a.sent();
                sfx = volumeAll.sfx, bg = volumeAll.bg, music = volumeAll.music, videos = volumeAll.videos;
                return [4 /*yield*/, (0, effects_1.call)(function () {
                        setAudioVolumeByType('sfx', sfx * (payload / 100));
                        setAudioVolumeByType('bg', bg * (payload / 100));
                        setAudioVolumeByType('music', music * (payload / 100));
                        (0, utils_1.setVideosVolume)(videos * (payload / 100));
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetGlobal = watchSetGlobal;
function setAudioVolumeByType(type, volume) {
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
    var _a = (0, getAudioInstances_1.getAudioInstances)(), audioInstances = _a.audioInstances, audioBgInstances = _a.audioBgInstances;
    setVolume(audioInstances);
    setVolume(audioBgInstances);
}
function watchSetBg(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.call)(function () {
                        setAudioVolumeByType('bg', payload);
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetBg = watchSetBg;
function watchSetSfx(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.call)(function () {
                        setAudioVolumeByType('sfx', payload);
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetSfx = watchSetSfx;
function watchSetMusic(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.call)(function () {
                        setAudioVolumeByType('music', payload);
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetMusic = watchSetMusic;
function watchSetVideos(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.call)(function () {
                        (0, utils_1.setVideosVolume)(payload);
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetVideos = watchSetVideos;
function watchActions() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setAll, watchSetAll)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setGlobal, watchSetGlobal)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setBg, watchSetBg)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setSfx, watchSetSfx)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setMusic, watchSetMusic)];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setVideos, watchSetVideos)];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchActions = watchActions;
//# sourceMappingURL=watchers.js.map