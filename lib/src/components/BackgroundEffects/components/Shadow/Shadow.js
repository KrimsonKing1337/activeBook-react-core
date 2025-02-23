"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../../../store");
var background_1 = require("../../../../store/effects/background");
var Shadow_scss_1 = __importDefault(require("./Shadow.scss"));
var Shadow = function () {
    var shadow = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.shadow);
    if (!shadow) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: shadow.style, className: Shadow_scss_1.default.shadow }));
};
exports.Shadow = Shadow;
//# sourceMappingURL=Shadow.js.map