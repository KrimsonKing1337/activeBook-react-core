"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Img_1 = require("../../../Img");
var store_1 = require("../../../../store");
var background_1 = require("../../../../store/effects/background");
var Wrapper_1 = require("../Wrapper");
var Images_scss_1 = __importDefault(require("./Images.scss"));
var Images = function () {
    var ref = (0, react_1.useRef)(null);
    var images = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.images);
    if (images.length === 0) {
        return null;
    }
    return images.map(function (imageCur) {
        var src = imageCur.src, style = imageCur.style, wrapperStyle = imageCur.wrapperStyle;
        return ((0, jsx_runtime_1.jsx)(Wrapper_1.Wrapper, { style: wrapperStyle, children: (0, jsx_runtime_1.jsx)(Img_1.Img, { passedRef: ref, style: style, className: Images_scss_1.default.img, src: src }) }));
    });
};
exports.Images = Images;
//# sourceMappingURL=Images.js.map