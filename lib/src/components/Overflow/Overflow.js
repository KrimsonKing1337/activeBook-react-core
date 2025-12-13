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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { getNarrativeElement } from '../PageWrapper/components/Narrative/utils';
import { useDispatch } from '../../store';
import { mainActions } from '../../store/main';
import styles from './Overflow.scss';
export var Overflow = function (_a) {
    var _b;
    var children = _a.children, isOpen = _a.isOpen, _c = _a.className, className = _c === void 0 ? '' : _c, etc = __rest(_a, ["children", "isOpen", "className"]);
    var dispatch = useDispatch();
    var overflowRef = useRef(null);
    // закрываем по Esc активный Overflow в данный момент
    useEffect(function () {
        var keypressEscHandler = function (e) {
            var key = e.key;
            if (key === 'Escape') {
                dispatch(mainActions.setMenuActiveState(null));
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', keypressEscHandler);
        }
        return function () {
            document.removeEventListener('keydown', keypressEscHandler);
        };
    }, [isOpen]);
    useEffect(function () {
        var _a;
        if (isOpen) {
            // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
            (_a = overflowRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            // возвращаем фокус на текст
            var narrativeElement = getNarrativeElement();
            narrativeElement === null || narrativeElement === void 0 ? void 0 : narrativeElement.focus();
        }
    }, [isOpen]);
    var overflowClassNames = classNames((_b = {},
        _b[styles.overflow] = true,
        _b[styles.isOpen] = isOpen,
        _b[className] = !!className,
        _b));
    return (_jsx("div", __assign({ ref: overflowRef, className: overflowClassNames, tabIndex: 0 }, etc, { children: children })));
};
//# sourceMappingURL=Overflow.js.map