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
import { Howl } from 'howler';
import { store } from 'store';
var HowlWrapper = /** @class */ (function () {
    function HowlWrapper(_a) {
        var id = _a.id, src = _a.src, loop = _a.loop, _b = _a.type, type = _b === void 0 ? 'sfx' : _b, _c = _a.screamer, screamer = _c === void 0 ? false : _c, _d = _a.fadeOutWhenUnload, fadeOutWhenUnload = _d === void 0 ? true : _d, _e = _a.onPlay, onPlay = _e === void 0 ? function () {
        } : _e, _f = _a.onUnload, onUnload = _f === void 0 ? function () { } : _f, _g = _a.onPause, onPause = _g === void 0 ? function () { } : _g, _h = _a.onStop, onStop = _h === void 0 ? function () { } : _h;
        this.src = '';
        this.type = 'sfx';
        this.fadeOutWhenUnload = true;
        this.isUnloading = false;
        this.isFading = false;
        var volume = this.getVolume();
        var volumeValue = volume.sfx / 100;
        var options = {
            src: src,
            loop: loop,
        };
        if (type === 'bg') {
            volumeValue = volume.bg / 100;
        }
        if (type === 'music') {
            volumeValue = volume.music / 100;
        }
        options.volume = volumeValue;
        if (screamer) {
            options.volume = 1;
        }
        this.howlInst = new Howl(options);
        this.id = id;
        this.src = src;
        this.type = type;
        this.fadeOutWhenUnload = fadeOutWhenUnload;
        this.onPlay = onPlay;
        this.onPause = onPause;
        this.onStop = onStop;
        this.onUnload = onUnload;
    }
    HowlWrapper.prototype.volume = function (n) {
        this.howlInst.volume(n);
    };
    HowlWrapper.prototype.getVolume = function () {
        var storeState = store.getState();
        var volume = storeState.volume;
        return volume;
    };
    HowlWrapper.prototype.getVolumeByType = function () {
        var volume = this.getVolume();
        var volumeValue = volume.sfx;
        if (this.type === 'bg') {
            volumeValue = volume.bg;
        }
        else if (this.type === 'music') {
            volumeValue = volume.music;
        }
        return volumeValue;
    };
    HowlWrapper.prototype.play = function (withFadeIn) {
        if (withFadeIn === void 0) { withFadeIn = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!withFadeIn) return [3 /*break*/, 4];
                        if (!!this.isFading) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fadeIn()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.howlInst.stop();
                        this.isFading = false;
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        if (this.isFading) {
                            this.howlInst.stop();
                            this.isFading = false;
                        }
                        _a.label = 5;
                    case 5:
                        this.howlInst.once('play', this.onPlay);
                        this.howlInst.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    HowlWrapper.prototype.pause = function (withFadeOut) {
        if (withFadeOut === void 0) { withFadeOut = false; }
        return __awaiter(this, void 0, void 0, function () {
            var volume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(withFadeOut && !this.isFading)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fadeOut()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.howlInst.once('pause', this.onPause);
                        this.howlInst.pause();
                        this.isFading = false;
                        volume = this.getVolumeByType() / 100;
                        this.volume(volume);
                        return [2 /*return*/];
                }
            });
        });
    };
    // не смог добиться быстрой остановки, всё равно ловлю баги. для сегментов лучше использовать без фэйда
    HowlWrapper.prototype.stop = function (withFadeOut) {
        if (withFadeOut === void 0) { withFadeOut = false; }
        return __awaiter(this, void 0, void 0, function () {
            var volume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(withFadeOut && !this.isFading)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fadeOut()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.howlInst.once('stop', this.onStop);
                        this.howlInst.stop();
                        this.isFading = false;
                        volume = this.getVolumeByType() / 100;
                        this.volume(volume);
                        return [2 /*return*/];
                }
            });
        });
    };
    HowlWrapper.prototype.unload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isUnloading = true;
                        if (!this.fadeOutWhenUnload) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fadeOut()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.howlInst.unload();
                        this.onUnload();
                        return [2 /*return*/];
                }
            });
        });
    };
    HowlWrapper.prototype.fade = function (from, to, dur) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, dur);
            _this.howlInst.fade(from, to, HowlWrapper.fadeDurationDefault);
        });
    };
    HowlWrapper.prototype.fadeIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var volume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isFading = true;
                        volume = this.getVolumeByType() / 100;
                        return [4 /*yield*/, this.fade(0, volume, HowlWrapper.fadeDurationDefault)];
                    case 1:
                        _a.sent();
                        this.isFading = false;
                        return [2 /*return*/, this.howlInst];
                }
            });
        });
    };
    HowlWrapper.prototype.fadeOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var volume;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isFading = true;
                        volume = this.getVolumeByType() / 100;
                        return [4 /*yield*/, this.fade(volume, 0, HowlWrapper.fadeDurationDefault)];
                    case 1:
                        _a.sent();
                        this.isFading = false;
                        return [2 /*return*/, this.howlInst];
                }
            });
        });
    };
    HowlWrapper.prototype.playing = function () {
        return this.howlInst.playing();
    };
    HowlWrapper.prototype.state = function () {
        return this.howlInst.state();
    };
    HowlWrapper.prototype.waitTillTheEnd = function () {
        var _this = this;
        this.isUnloading = true;
        return new Promise(function (resolve) {
            if (_this.playing()) {
                var interval_1 = setInterval(function () {
                    if (!_this.playing()) {
                        clearInterval(interval_1);
                        resolve();
                    }
                }, 10);
            }
            else {
                resolve();
            }
        });
    };
    HowlWrapper.fadeDurationDefault = 1000;
    return HowlWrapper;
}());
export { HowlWrapper };
//# sourceMappingURL=HowlWrapper.js.map