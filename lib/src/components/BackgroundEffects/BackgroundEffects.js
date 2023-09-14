"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundEffects = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../store");
var common_1 = require("../../store/effects/common");
var video_1 = require("../../store/effects/background/video");
var img_1 = require("../../store/effects/background/img");
var Video_1 = require("../Video");
var Img_1 = require("../Img");
var Dots_1 = require("./components/Dots");
var BackgroundEffects_scss_1 = __importDefault(require("./BackgroundEffects.scss"));
var BackgroundEffects = function () {
    var backgroundVideoIsActive = (0, store_1.useSelector)(video_1.backgroundVideoEffectSelectors.isActive);
    var backgroundVideoSrc = (0, store_1.useSelector)(video_1.backgroundVideoEffectSelectors.src);
    var backgroundImgIsActive = (0, store_1.useSelector)(img_1.backgroundImgEffectSelectors.isActive);
    var backgroundImgSrc = (0, store_1.useSelector)(img_1.backgroundImgEffectSelectors.src);
    var dotsIsActive = (0, store_1.useSelector)(common_1.effectsSelectors.dotsIsActive);
    var oneOfBgIsActive = backgroundVideoIsActive || backgroundImgIsActive;
    return ((0, jsx_runtime_1.jsxs)("div", { className: BackgroundEffects_scss_1.default.backgroundEffectsWrapper, children: [dotsIsActive && (0, jsx_runtime_1.jsx)(Dots_1.Dots, {}), oneOfBgIsActive && ((0, jsx_runtime_1.jsxs)("div", { className: BackgroundEffects_scss_1.default.backgroundObjectsWrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: BackgroundEffects_scss_1.default.backgroundObjectsShadow }), backgroundVideoIsActive && ((0, jsx_runtime_1.jsx)("div", { className: BackgroundEffects_scss_1.default.backgroundObjectWrapper, children: (0, jsx_runtime_1.jsx)(Video_1.Video, { src: backgroundVideoSrc, autoPlay: true, loop: true, muted: true }) })), backgroundImgIsActive && ((0, jsx_runtime_1.jsx)("div", { className: BackgroundEffects_scss_1.default.backgroundObjectWrapper, children: (0, jsx_runtime_1.jsx)(Img_1.Img, { src: backgroundImgSrc }) }))] }))] }));
};
exports.BackgroundEffects = BackgroundEffects;
//# sourceMappingURL=BackgroundEffects.js.map