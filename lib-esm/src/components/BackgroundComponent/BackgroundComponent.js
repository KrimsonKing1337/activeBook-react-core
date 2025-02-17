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
import classnames from 'classnames';
import styles from './BackgroundComponent.scss';
export var BackgroundComponent = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.withShadow, withShadow = _b === void 0 ? true : _b, shadowColor = _a.shadowColor, etc = __rest(_a, ["children", "className", "withShadow", "shadowColor"]);
    var wrapperClassName = classnames([styles.wrapper, className]);
    return (_jsxs("div", __assign({ className: wrapperClassName }, etc, { style: { backgroundColor: shadowColor }, children: [children && withShadow && (_jsx("div", { className: styles.shadow })), children] })));
};
//# sourceMappingURL=BackgroundComponent.js.map