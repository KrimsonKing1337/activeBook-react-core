"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("../../../Label");
var store_1 = require("../../../../store");
var volume_1 = require("../../../../store/volume");
var Slider_1 = require("./components/Slider");
var utils_1 = require("./utils");
var Volume_scss_1 = __importDefault(require("./Volume.scss"));
var Volume = function () {
    var dispatch = (0, store_1.useDispatch)();
    var globalVolume = (0, store_1.useSelector)(volume_1.volumeSelectors.global);
    var bgVolume = (0, store_1.useSelector)(volume_1.volumeSelectors.bg);
    var sfxVolume = (0, store_1.useSelector)(volume_1.volumeSelectors.sfx);
    var musicVolume = (0, store_1.useSelector)(volume_1.volumeSelectors.music);
    // todo: мб слишком часто запись в local storage происходит. мб на onAfterChange переделать
    var afterChangeHandler = function () {
        (0, utils_1.playAchievement)();
    };
    var globalChangeHandler = function (value) {
        dispatch(volume_1.volumeActions.setGlobal(value));
    };
    var bgChangeHandler = function (value) {
        dispatch(volume_1.volumeActions.setBg(value));
    };
    var sfxChangeHandler = function (value) {
        dispatch(volume_1.volumeActions.setSfx(value));
    };
    var musicChangeHandler = function (value) {
        dispatch(volume_1.volumeActions.setMusic(value));
    };
    /*
    * пытался то, что ниже переделать в массив и map(),
    * но получаю ошибку: Can't perform a React state update on an unmounted component
    */
    return ((0, jsx_runtime_1.jsxs)("div", { className: Volume_scss_1.default.volume, children: [(0, jsx_runtime_1.jsxs)("div", { className: Volume_scss_1.default.item, children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: "\u041E\u0431\u0449\u0430\u044F \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C" }), (0, jsx_runtime_1.jsx)(Slider_1.Slider, { value: globalVolume, onChange: globalChangeHandler, onAfterChange: afterChangeHandler })] }), (0, jsx_runtime_1.jsxs)("div", { className: Volume_scss_1.default.item, children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: "\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0438" }), (0, jsx_runtime_1.jsx)(Slider_1.Slider, { value: musicVolume, onChange: musicChangeHandler, onAfterChange: afterChangeHandler })] }), (0, jsx_runtime_1.jsxs)("div", { className: Volume_scss_1.default.item, children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: "SFX" }), (0, jsx_runtime_1.jsx)(Slider_1.Slider, { value: sfxVolume, onChange: sfxChangeHandler, onAfterChange: afterChangeHandler })] }), (0, jsx_runtime_1.jsxs)("div", { className: Volume_scss_1.default.item, children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: "\u0424\u043E\u043D\u043E\u0432\u044B\u0435 \u0437\u0432\u0443\u043A\u0438" }), (0, jsx_runtime_1.jsx)(Slider_1.Slider, { value: bgVolume, onChange: bgChangeHandler, onAfterChange: afterChangeHandler })] })] }));
};
exports.Volume = Volume;
//# sourceMappingURL=Volume.js.map