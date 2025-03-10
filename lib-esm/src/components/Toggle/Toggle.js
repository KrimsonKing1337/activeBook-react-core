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
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Label } from 'components/Label';
import styles from './Toggle.scss';
export var Toggle = function (_a) {
    var _b, _c, _d;
    var label = _a.label, _e = _a.isActiveDefault, isActiveDefault = _e === void 0 ? true : _e, isActive = _a.isActive, _f = _a.withoutBorder, withoutBorder = _f === void 0 ? false : _f, onClickOn = _a.onClickOn, onClickOff = _a.onClickOff, rest = __rest(_a, ["label", "isActiveDefault", "isActive", "withoutBorder", "onClickOn", "onClickOff"]);
    var _g = useState(isActiveDefault), uncontrolledIsActive = _g[0], setUncontrolledIsActive = _g[1];
    useEffect(function () {
        setUncontrolledIsActive(isActiveDefault);
    }, [isActiveDefault]);
    var buttonClickHandler = function (value, cb) {
        if (isActive === undefined) {
            if (value !== uncontrolledIsActive) {
                setUncontrolledIsActive(!uncontrolledIsActive);
            }
        }
        cb();
    };
    var toggleClassNames = classNames((_b = {},
        _b[styles.toggle] = true,
        _b[styles.isWithoutBorder] = withoutBorder,
        _b));
    var trueIsActive = isActive === undefined ? uncontrolledIsActive : isActive;
    var itemOnClassNames = classNames((_c = {},
        _c[styles.item] = true,
        _c[styles.isActive] = trueIsActive,
        _c));
    var itemOffClassNames = classNames((_d = {},
        _d[styles.item] = true,
        _d[styles.isActive] = !trueIsActive,
        _d));
    return (_jsxs("div", __assign({ className: toggleClassNames }, rest, { children: [_jsx(Label, { label: label }), _jsxs("div", { className: styles.itemsWrapper, children: [_jsx("div", { className: itemOnClassNames, onClick: function () { return buttonClickHandler(true, onClickOn); }, children: "\u0412\u043A\u043B" }), _jsx("div", { className: itemOffClassNames, onClick: function () { return buttonClickHandler(false, onClickOff); }, children: "\u0412\u044B\u043A\u043B" })] })] })));
};
//# sourceMappingURL=Toggle.js.map