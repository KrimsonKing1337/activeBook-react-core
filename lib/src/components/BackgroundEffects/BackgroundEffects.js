"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundEffects = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var nanoid_1 = require("nanoid");
var store_1 = require("../../store");
var background_1 = require("../../store/effects/background");
var components_1 = require("./components");
var BackgroundEffects_scss_1 = __importDefault(require("./BackgroundEffects.scss"));
var BackgroundEffects = function () {
    var effects = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.effects);
    var BackgroundObjectsWrappers = Object.keys(effects).map(function (keyCur) {
        var effectCur = effects[keyCur];
        var _a = effectCur.videos, videos = _a === void 0 ? [] : _a, _b = effectCur.images, images = _b === void 0 ? [] : _b, _c = effectCur.Component, Component = _c === void 0 ? null : _c, _d = effectCur.shadow, shadow = _d === void 0 ? {} : _d, _e = effectCur.style, style = _e === void 0 ? {} : _e;
        var oneOfBgIsActive = !!videos.length || !!images.length || !!Component;
        var uuid = (0, nanoid_1.nanoid)();
        return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: oneOfBgIsActive && ((0, jsx_runtime_1.jsxs)("div", { style: style, className: BackgroundEffects_scss_1.default.backgroundObjectsWrapper, children: [(0, jsx_runtime_1.jsx)(components_1.Shadow, { options: shadow }), Component, (0, jsx_runtime_1.jsx)(components_1.Videos, { videos: videos }), (0, jsx_runtime_1.jsx)(components_1.Images, { images: images })] })) }, uuid));
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: BackgroundEffects_scss_1.default.backgroundEffectsWrapper, children: [(0, jsx_runtime_1.jsx)(components_1.Dots, {}), BackgroundObjectsWrappers.map(function (cur) { return cur; })] }));
};
exports.BackgroundEffects = BackgroundEffects;
//# sourceMappingURL=BackgroundEffects.js.map