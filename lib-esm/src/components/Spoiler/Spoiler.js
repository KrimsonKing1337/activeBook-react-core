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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import styles from './Spoiler.scss';
export var Spoiler = function (_a) {
    var children = _a.children, label = _a.label, _b = _a.needToSetHeight, needToSetHeight = _b === void 0 ? false : _b, _c = _a.setNeedToSetHeightToFalse, setNeedToSetHeightToFalse = _c === void 0 ? function () {
    } : _c, rest = __rest(_a, ["children", "label", "needToSetHeight", "setNeedToSetHeightToFalse"]);
    var _d = useState(true), isOpen = _d[0], setIsOpen = _d[1];
    var contentRef = useRef(null);
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
    useEffect(function () {
        setHeight(isOpen);
    }, [isOpen]);
    useEffect(function () {
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
    return (_jsxs("div", __assign({ className: styles.spoiler }, rest, { children: [_jsx("div", { className: styles.button, onClick: buttonClickHandler, children: buttonLabel }), _jsx("div", { className: styles.content, ref: contentRef, children: _jsx("div", { children: children }) })] })));
};
//# sourceMappingURL=Spoiler.js.map