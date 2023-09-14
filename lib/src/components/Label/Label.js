"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_scss_1 = __importDefault(require("./Label.scss"));
var Label = function (_a) {
    var label = _a.label;
    return ((0, jsx_runtime_1.jsx)("div", { className: Label_scss_1.default.label, children: label }));
};
exports.Label = Label;
//# sourceMappingURL=Label.js.map