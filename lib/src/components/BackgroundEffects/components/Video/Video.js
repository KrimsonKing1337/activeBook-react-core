"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Video_1 = require("../../../Video");
var store_1 = require("../../../../store");
var background_1 = require("../../../../store/effects/background");
var Wrapper_1 = require("../Wrapper");
var Video_scss_1 = __importDefault(require("./Video.scss"));
var Video = function () {
    var ref = (0, react_1.useRef)(null);
    var video = (0, store_1.useSelector)(background_1.backgroundEffectSelectors.video);
    if (!video) {
        return null;
    }
    var src = video.src, wrapperStyle = video.wrapperStyle, style = video.style, _a = video.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = video.loop, loop = _b === void 0 ? true : _b, _c = video.muted, muted = _c === void 0 ? true : _c;
    return ((0, jsx_runtime_1.jsx)(Wrapper_1.Wrapper, { style: wrapperStyle, children: (0, jsx_runtime_1.jsx)(Video_1.Video, { passedRef: ref, style: style, className: Video_scss_1.default.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted }) }));
};
exports.Video = Video;
//# sourceMappingURL=Video.js.map