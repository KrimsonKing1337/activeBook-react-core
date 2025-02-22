"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Wrapper_scss_1 = __importDefault(require("./Wrapper.scss"));
var Wrapper = function (_a) {
    var children = _a.children, style = _a.style;
    return ((0, jsx_runtime_1.jsx)("div", { style: style, className: Wrapper_scss_1.default.wrapper, children: children }));
};
exports.Wrapper = Wrapper;
//# sourceMappingURL=Wrapper.js.map