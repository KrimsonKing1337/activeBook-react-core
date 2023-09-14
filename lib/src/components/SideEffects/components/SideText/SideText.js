"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var SideText_scss_1 = __importDefault(require("./SideText.scss"));
var SideText = function (_a) {
    var children = _a.children;
    var childrenAsArray = react_1.default.Children.toArray(children);
    if (childrenAsArray.length !== 2) {
        throw new Error('There are must be two children in props!');
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: SideText_scss_1.default.sideTextScrollWrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: SideText_scss_1.default.sideTextScrollLeftWrapper, children: (0, jsx_runtime_1.jsx)("div", { className: SideText_scss_1.default.sideTextScrollLeft, children: (0, jsx_runtime_1.jsx)("div", { className: SideText_scss_1.default.sideTextScrollContent, children: childrenAsArray[0] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: SideText_scss_1.default.sideTextScrollRightWrapper, children: (0, jsx_runtime_1.jsx)("div", { className: SideText_scss_1.default.sideTextScrollRight, children: (0, jsx_runtime_1.jsx)("div", { className: SideText_scss_1.default.sideTextScrollContent, children: childrenAsArray[1] }) }) })] }));
};
exports.SideText = SideText;
//# sourceMappingURL=SideText.js.map