import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import classNames from 'classnames';
import { Segment } from '../../..';
import { useVibration } from '../../../../hooks/effects/vibration';
import styles from './Segments.scss';
export var Segments = function () {
    var _a, _b;
    var _c = useVibration(), vibrationOn = _c.vibrationOn, vibrationOff = _c.vibrationOff;
    var _d = useState(false), isSegment1Active = _d[0], setIsSegment1Active = _d[1];
    var _e = useState(false), isSegment2Active = _e[0], setIsSegment2Active = _e[1];
    var segment1EnterHandler = function () {
        vibrationOn(1000);
        setIsSegment1Active(true);
    };
    var segment1ExitHandler = function () {
        vibrationOff();
        setIsSegment1Active(false);
    };
    var segment2EnterHandler = function () {
        vibrationOn(500);
        setIsSegment2Active(true);
    };
    var segment2ExitHandler = function () {
        vibrationOff();
        setIsSegment2Active(false);
    };
    var segment1ContentClassNames = classNames((_a = {},
        _a[styles.SegmentContent] = true,
        _a[styles.isActive] = isSegment1Active,
        _a));
    var segment2ContentClassNames = classNames((_b = {},
        _b[styles.SegmentContent] = true,
        _b[styles.isActive] = isSegment2Active,
        _b));
    return (_jsxs("div", { "data-welcome-tour-id": "segments", children: [_jsxs(Segment, { onEnter: segment1EnterHandler, onExit: segment1ExitHandler, children: [_jsx("p", { children: "\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F" }), _jsx("p", { className: segment1ContentClassNames, children: "\u041C\u0435\u043D\u044F \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u043E\u0442 \u0441\u0435\u0433\u043C\u0435\u043D\u0442 \u0430\u043A\u0442\u0438\u0432\u0435\u043D" })] }), _jsxs(Segment, { onEnter: segment2EnterHandler, onExit: segment2ExitHandler, children: [_jsx("p", { children: "\u0418 \u043D\u0430 \u043C\u0435\u043D\u044F \u043D\u0430\u0436\u043C\u0438!" }), _jsx("p", { className: segment2ContentClassNames, children: "\u0412\u043D\u0443\u0442\u0440\u0438 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0442\u0435\u043A\u0441\u0442, \u044D\u0444\u0444\u0435\u043A\u0442\u044B \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435!" })] })] }));
};
//# sourceMappingURL=Segments.js.map