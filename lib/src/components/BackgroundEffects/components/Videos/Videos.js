"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videos = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Video_1 = require("../../../Video");
var store_1 = require("../../../../store");
var background_1 = require("../../../../store/effects/background");
var Wrapper_1 = require("../Wrapper");
var Videos_scss_1 = __importDefault(require("./Videos.scss"));
var Videos = function () {
    var ref = (0, react_1.useRef)(null);
    var videos = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.videos);
    if (videos.length === 0) {
        return null;
    }
    return videos.map(function (videoCur) {
        var src = videoCur.src, wrapperStyle = videoCur.wrapperStyle, style = videoCur.style, _a = videoCur.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = videoCur.loop, loop = _b === void 0 ? true : _b, _c = videoCur.muted, muted = _c === void 0 ? true : _c;
        return ((0, jsx_runtime_1.jsx)(Wrapper_1.Wrapper, { style: wrapperStyle, children: (0, jsx_runtime_1.jsx)(Video_1.Video, { passedRef: ref, style: style, className: Videos_scss_1.default.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted }) }));
    });
};
exports.Videos = Videos;
//# sourceMappingURL=Videos.js.map