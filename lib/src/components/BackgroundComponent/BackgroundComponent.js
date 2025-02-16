"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var BackgroundComponent_scss_1 = __importDefault(require("./BackgroundComponent.scss"));
var BackgroundComponent = function (props) {
    var children = props.children, className = props.className, _a = props.withShadow, withShadow = _a === void 0 ? true : _a;
    var wrapperClassName = (0, classnames_1.default)([BackgroundComponent_scss_1.default.wrapper, className]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: wrapperClassName }, props, { children: [withShadow && ((0, jsx_runtime_1.jsx)("div", { className: BackgroundComponent_scss_1.default.shadow })), children] })));
};
exports.BackgroundComponent = BackgroundComponent;
//# sourceMappingURL=BackgroundComponent.js.map