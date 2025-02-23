"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundEffects = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../store");
var background_1 = require("../../store/effects/background");
var components_1 = require("./components");
var BackgroundEffects_scss_1 = __importDefault(require("./BackgroundEffects.scss"));
var BackgroundEffects = function () {
    var style = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.style);
    var videos = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.images);
    var images = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.images);
    var Component = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.Component);
    var oneOfBgIsActive = videos.length || images.length || Component;
    return ((0, jsx_runtime_1.jsxs)("div", { style: style, className: BackgroundEffects_scss_1.default.backgroundEffectsWrapper, children: [(0, jsx_runtime_1.jsx)(components_1.Dots, {}), oneOfBgIsActive && ((0, jsx_runtime_1.jsxs)("div", { className: BackgroundEffects_scss_1.default.backgroundObjectsWrapper, children: [(0, jsx_runtime_1.jsx)(components_1.Shadow, {}), Component, (0, jsx_runtime_1.jsx)(components_1.Videos, {}), (0, jsx_runtime_1.jsx)(components_1.Images, {})] }))] }));
};
exports.BackgroundEffects = BackgroundEffects;
//# sourceMappingURL=BackgroundEffects.js.map