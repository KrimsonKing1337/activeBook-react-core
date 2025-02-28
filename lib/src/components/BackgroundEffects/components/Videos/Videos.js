"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videos = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var nanoid_1 = require("nanoid");
var Video_1 = require("../../../Video");
var Wrapper_1 = require("../Wrapper");
var Videos_scss_1 = __importDefault(require("./Videos.scss"));
var Videos = function (_a) {
    var videos = _a.videos;
    if (videos.length === 0) {
        return null;
    }
    return videos.map(function (videoCur) {
        var src = videoCur.src, wrapperStyle = videoCur.wrapperStyle, style = videoCur.style, _a = videoCur.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = videoCur.loop, loop = _b === void 0 ? true : _b, _c = videoCur.muted, muted = _c === void 0 ? true : _c, _d = videoCur.relativeVolume, relativeVolume = _d === void 0 ? 100 : _d;
        var uuid = (0, nanoid_1.nanoid)();
        /*
          todo: возможно, стоит autoPlay убрать из параметров.
           есть подозрение, что видео начинает воспроизведение до отображения страницы (PageWrapper и Narrative)
        */
        return ((0, jsx_runtime_1.jsx)(Wrapper_1.Wrapper, { style: wrapperStyle, children: (0, jsx_runtime_1.jsx)(Video_1.Video, { style: style, className: Videos_scss_1.default.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted, relativeVolume: relativeVolume }) }, uuid));
    });
};
exports.Videos = Videos;
//# sourceMappingURL=Videos.js.map