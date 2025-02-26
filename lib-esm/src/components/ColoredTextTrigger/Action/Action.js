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
import { jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import styles from './Action.scss';
export var Action = function (_a) {
    var _b;
    var children = _a.children, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, _d = _a.withSpaces, withSpaces = _d === void 0 ? true : _d, _e = _a.onClick, onClick = _e === void 0 ? function () {
    } : _e, props = __rest(_a, ["children", "fullWidth", "withSpaces", "onClick"]);
    var actionClassNames = classNames((_b = {},
        _b[styles.action] = true,
        _b[styles.isFullWidth] = fullWidth,
        _b));
    return (_jsxs("span", __assign({ className: actionClassNames, onClick: onClick }, props, { children: [withSpaces && ' ', children, withSpaces && ' '] })));
};
//# sourceMappingURL=Action.js.map