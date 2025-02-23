"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Shadow_scss_1 = __importDefault(require("./Shadow.scss"));
var Shadow = function (_a) {
    var options = _a.options;
    var style = options.style;
    if (!style) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: style, className: Shadow_scss_1.default.shadow }));
};
exports.Shadow = Shadow;
//# sourceMappingURL=Shadow.js.map