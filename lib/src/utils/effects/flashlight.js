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
exports.flashlightInst = exports.Flashlight = void 0;
var store_1 = require("../../store");
var main_1 = require("../../store/main");
var Flashlight = /** @class */ (function () {
    function Flashlight() {
        this.track = null;
    }
    Flashlight.getIsFlashlightAvailable = function () {
        return store_1.store.getState().main.isFlashlightAvailable;
    };
    Flashlight.getIsTorchSupported = function (capabilities) {
        return capabilities.torch || ('fillLightMode' in capabilities &&
            capabilities.fillLightMode.length !== 0 &&
            capabilities.fillLightMode !== 'none');
    };
    Flashlight.getNavigatorCameraPermission = function () {
        var permissionName = 'camera';
        return navigator.permissions.query({ name: permissionName });
    };
    Flashlight.getIsCordovaFlashlight = function () {
        var _a;
        return !!((_a = window.plugins) === null || _a === void 0 ? void 0 : _a.flashlight);
    };
    Flashlight.initCordovaFlashlight = function (cordovaFlashlight) {
        cordovaFlashlight.available(function (isAvailable) {
            var state = isAvailable ? 'cordova' : false;
            store_1.store.dispatch(main_1.mainActions.setIsFlashlightAvailable(state));
        });
    };
    Flashlight.prototype.torchControl = function (state) {
        if (!this.track) {
            return;
        }
        this.track.applyConstraints({
            advanced: [{
                    torch: state,
                }],
        });
    };
    Flashlight.prototype.mediaStreamTrackStop = function () {
        var _a;
        (_a = this.track) === null || _a === void 0 ? void 0 : _a.stop();
    };
    /**
     * реализацию взял отсюда: https://stackoverflow.com/a/70228940
     * присутствует небольшая задержка перед срабатыванием.
     * в кордове этой проблемы нет
     */
    Flashlight.prototype.torchInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, cameras, stream, imageCapture, capabilities, torchSupported;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.mediaDevices) {
                            console.log('no navigator.mediaDevices');
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _a.sent();
                        cameras = devices.filter(function (device) { return device.kind === 'videoinput'; });
                        if (cameras.length === 0) {
                            console.log('no camera found on this device');
                            store_1.store.dispatch(main_1.mainActions.setFlashlightProblems('Камера не найдена'));
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                video: {
                                    facingMode: 'environment',
                                },
                            })];
                    case 2:
                        stream = _a.sent();
                        this.track = stream.getVideoTracks()[0];
                        if (!window.ImageCapture) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        imageCapture = new ImageCapture(this.track);
                        return [4 /*yield*/, imageCapture.getPhotoCapabilities()];
                    case 3:
                        capabilities = _a.sent();
                        torchSupported = Flashlight.getIsTorchSupported(capabilities);
                        if (!torchSupported) {
                            console.log('no torch found');
                            store_1.store.dispatch(main_1.mainActions.setFlashlightProblems('Вспышка не найдена'));
                            this.mediaStreamTrackStop();
                            return [2 /*return*/, Promise.resolve()];
                        }
                        store_1.store.dispatch(main_1.mainActions.setIsFlashlightAvailable('js'));
                        return [2 /*return*/];
                }
            });
        });
    };
    Flashlight.prototype.init = function () {
        var cordovaFlashlight = Flashlight.getIsCordovaFlashlight();
        if (cordovaFlashlight) {
            Flashlight.initCordovaFlashlight(cordovaFlashlight);
            return Promise.resolve();
        }
        else {
            return this.torchInit();
        }
    };
    Flashlight.prototype.on = function () {
        var flashLightAvailableState = Flashlight.getIsFlashlightAvailable();
        if (!flashLightAvailableState) {
            return;
        }
        if (flashLightAvailableState === 'js') {
            this.torchControl(true);
        }
        else if (flashLightAvailableState === 'cordova') {
            window.plugins.flashlight.switchOn();
        }
    };
    Flashlight.prototype.off = function () {
        var flashLightAvailableState = Flashlight.getIsFlashlightAvailable();
        if (!flashLightAvailableState) {
            return;
        }
        if (flashLightAvailableState === 'js') {
            this.torchControl(false);
        }
        else if (flashLightAvailableState === 'cordova') {
            window.plugins.flashlight.switchOff();
        }
    };
    return Flashlight;
}());
exports.Flashlight = Flashlight;
exports.flashlightInst = new Flashlight();
//# sourceMappingURL=flashlight.js.map