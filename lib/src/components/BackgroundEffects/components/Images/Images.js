"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var nanoid_1 = require("nanoid");
var Img_1 = require("../../../Img");
var Wrapper_1 = require("../Wrapper");
var Images_scss_1 = __importDefault(require("./Images.scss"));
var Images = function (_a) {
    var images = _a.images;
    if (images.length === 0) {
        return null;
    }
    return images.map(function (imageCur) {
        var src = imageCur.src, style = imageCur.style, wrapperStyle = imageCur.wrapperStyle;
        var uuid = (0, nanoid_1.nanoid)();
        return ((0, jsx_runtime_1.jsx)(Wrapper_1.Wrapper, { style: wrapperStyle, children: (0, jsx_runtime_1.jsx)(Img_1.Img, { style: style, className: Images_scss_1.default.img, src: src }) }, uuid));
    });
};
exports.Images = Images;
//# sourceMappingURL=Images.js.map