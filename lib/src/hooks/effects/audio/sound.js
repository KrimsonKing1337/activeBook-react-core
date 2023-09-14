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
exports.useSound = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var sound_1 = require("../../../store/effects/audio/sound");
var HowlWrapper_1 = require("../../../utils/effects/audio/HowlWrapper");
function useSound(_a) {
    var _this = this;
    var src = _a.src, _b = _a.fadeOutWhenUnload, fadeOutWhenUnload = _b === void 0 ? true : _b, _c = _a.bg, bg = _c === void 0 ? false : _c, _d = _a.loop, loop = _d === void 0 ? false : _d, _e = _a.playOnLoad, playOnLoad = _e === void 0 ? false : _e, _f = _a.stopBy, stopBy = _f === void 0 ? 0 : _f, _g = _a.delay, delay = _g === void 0 ? 0 : _g, _h = _a.screamer, screamer = _h === void 0 ? false : _h, _j = _a.onPlay, onPlay = _j === void 0 ? function () {
    } : _j, _k = _a.onUnmount, onUnmount = _k === void 0 ? function () {
    } : _k;
    var dispatch = (0, store_1.useDispatch)();
    var soundInst = (0, store_1.useSelector)(sound_1.soundEffectsSelectors.soundInst);
    (0, react_1.useEffect)(function () {
        var opt = {
            src: [src],
            loop: loop,
            screamer: screamer,
            onPlay: onPlay,
        };
        if (bg) {
            opt.type = 'bg';
        }
        var howlInst = new HowlWrapper_1.HowlWrapper(opt);
        dispatch(sound_1.soundEffectsActions.setSound(howlInst));
        return function () {
            onUnmount();
        };
    }, []);
    (0, react_1.useEffect)(function () {
        var timer = null;
        if (!soundInst || soundInst.isUnloading) {
            return;
        }
        if (playOnLoad) {
            timer = setTimeout(function () {
                soundInst.play();
            }, delay);
        }
        if (stopBy) {
            timer = setTimeout(function () {
                soundInst.stop();
            }, stopBy);
        }
        return function () {
            if (!soundInst || soundInst.isUnloading) {
                return;
            }
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var dur;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dur = parseFloat(soundInst.howlInst.duration().toFixed(1));
                            if (!(dur < 1.2)) return [3 /*break*/, 2];
                            return [4 /*yield*/, soundInst.waitTillTheEnd()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            soundInst.unload(fadeOutWhenUnload);
                            if (timer) {
                                clearTimeout(timer);
                            }
                            return [2 /*return*/];
                    }
                });
            }); })();
        };
    }, [soundInst]);
    return soundInst;
}
exports.useSound = useSound;
//# sourceMappingURL=sound.js.map