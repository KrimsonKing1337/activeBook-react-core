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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spoiler = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Spoiler_scss_1 = __importDefault(require("./Spoiler.scss"));
var Spoiler = function (_a) {
    var children = _a.children, label = _a.label, _b = _a.needToSetHeight, needToSetHeight = _b === void 0 ? false : _b, _c = _a.setNeedToSetHeightToFalse, setNeedToSetHeightToFalse = _c === void 0 ? function () {
    } : _c, rest = __rest(_a, ["children", "label", "needToSetHeight", "setNeedToSetHeightToFalse"]);
    var _d = (0, react_1.useState)(true), isOpen = _d[0], setIsOpen = _d[1];
    var contentRef = (0, react_1.useRef)(null);
    var buttonText = isOpen ? 'Закрыть' : 'Раскрыть';
    var buttonLabel = label ? label : buttonText;
    // const childrenIsText = typeof children === 'string';
    var setHeight = function (isOpen) {
        var _a;
        var contentElement = contentRef.current;
        if (!contentElement) {
            return;
        }
        if (!isOpen) {
            contentElement.style.height = '0';
            return;
        }
        var contentHeight = (_a = contentElement.firstElementChild) === null || _a === void 0 ? void 0 : _a.scrollHeight;
        contentElement.style.height = "".concat(contentHeight, "px");
    };
    (0, react_1.useEffect)(function () {
        setHeight(isOpen);
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        if (!needToSetHeight) {
            return;
        }
        setHeight(isOpen);
        setNeedToSetHeightToFalse();
    }, [isOpen, needToSetHeight]);
    var buttonClickHandler = function () {
        var contentElement = contentRef.current;
        if (!contentElement) {
            return;
        }
        setIsOpen(!isOpen);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: Spoiler_scss_1.default.spoiler }, rest, { children: [(0, jsx_runtime_1.jsx)("div", { className: Spoiler_scss_1.default.button, onClick: buttonClickHandler, children: buttonLabel }), (0, jsx_runtime_1.jsx)("div", { className: Spoiler_scss_1.default.content, ref: contentRef, children: (0, jsx_runtime_1.jsx)("div", { children: children }) })] })));
};
exports.Spoiler = Spoiler;
//# sourceMappingURL=Spoiler.js.map