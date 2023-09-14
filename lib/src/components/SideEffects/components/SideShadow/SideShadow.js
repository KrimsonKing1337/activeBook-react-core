"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideShadow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hooks_1 = require("./hooks");
var SideShadow_scss_1 = __importDefault(require("./SideShadow.scss"));
var SideShadow = function () {
    var sideShadowRef = (0, react_1.useRef)(null);
    (0, hooks_1.useResetNameOfTextShadowAnimationCss)();
    (0, hooks_1.useColorPolice)(sideShadowRef);
    (0, hooks_1.useColorCarameldansen)(sideShadowRef);
    return ((0, jsx_runtime_1.jsx)("div", { ref: sideShadowRef, className: SideShadow_scss_1.default.sideShadow }));
};
exports.SideShadow = SideShadow;
//# sourceMappingURL=SideShadow.js.map