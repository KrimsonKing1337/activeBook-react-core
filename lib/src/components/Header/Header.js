"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_scss_1 = __importDefault(require("./Header.scss"));
var Header = function (_a) {
    var label = _a.label;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: Header_scss_1.default.header, children: label }) }));
};
exports.Header = Header;
//# sourceMappingURL=Header.js.map