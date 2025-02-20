"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.useAudio = void 0;
var react_1 = require("react");
var nanoid_1 = require("nanoid");
var store_1 = require("../../store");
var audio_1 = require("../../store/effects/audio/audio");
var HowlWrapper_1 = require("../../utils/effects/audio/HowlWrapper");
var waitTillTheEndIfAudioIsTooShort_1 = require("../../utils/effects/audio/waitTillTheEndIfAudioIsTooShort");
function useAudio(_a) {
    var _this = this;
    var _b = _a.id, id = _b === void 0 ? '' : _b, src = _a.src, _c = _a.type, type = _c === void 0 ? 'sfx' : _c, _d = _a.loop, loop = _d === void 0 ? false : _d, _e = _a.playOnLoad, playOnLoad = _e === void 0 ? false : _e, _f = _a.stopBy, stopBy = _f === void 0 ? 0 : _f, _g = _a.delay, delay = _g === void 0 ? 0 : _g, _h = _a.screamer, screamer = _h === void 0 ? false : _h, _j = _a.fadeOutWhenUnload, fadeOutWhenUnload = _j === void 0 ? true : _j, _k = _a.onPlay, onPlay = _k === void 0 ? function () { } : _k, _l = _a.onUnload, onUnload = _l === void 0 ? function () { } : _l;
    var dispatch = (0, store_1.useDispatch)();
    var audioInstances = (0, store_1.useSelector)(audio_1.audioEffectsSelectors.audioInstances);
    var _m = (0, react_1.useState)(id), audioId = _m[0], setAudioId = _m[1];
    (0, react_1.useEffect)(function () {
        var uuid = id || (0, nanoid_1.nanoid)();
        var opt = {
            id: uuid,
            src: [src],
            type: type,
            loop: loop,
            screamer: screamer,
            fadeOutWhenUnload: fadeOutWhenUnload,
            onPlay: onPlay,
            onUnload: onUnload,
        };
        var howlInst = new HowlWrapper_1.HowlWrapper(opt);
        setAudioId(uuid);
        dispatch(audio_1.audioEffectsActions.setAudioInstance(howlInst));
    }, []);
    (0, react_1.useEffect)(function () {
        var audioInstance = audioInstances[audioId];
        if (!audioInstance || audioInstance.isUnloading) {
            return;
        }
        var timer = null;
        if (playOnLoad) {
            timer = setTimeout(function () {
                audioInstance.play();
            }, delay);
        }
        if (stopBy) {
            timer = setTimeout(function () {
                audioInstance.stop();
            }, stopBy);
        }
        return function () {
            if (!audioInstance || audioInstance.isUnloading) {
                return;
            }
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, waitTillTheEndIfAudioIsTooShort_1.waitTillTheEndIfAudioIsTooShort)(audioInstance)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })();
            dispatch(audio_1.audioEffectsActions.deleteAudioInstance(audioId));
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [audioInstances, audioId]);
    return audioInstances[audioId];
}
exports.useAudio = useAudio;
//# sourceMappingURL=audio.js.map