"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Debug_scss_1 = __importDefault(require("./Debug.scss"));
var Debug = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", { className: Debug_scss_1.default.debug, children: children }));
};
exports.Debug = Debug;
//# sourceMappingURL=Debug.js.map