import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import Hammer from 'hammerjs';
import { useSelector } from 'store';
import { configSelectors } from 'store/config';
import { goNextPage, goPrevPage } from 'utils/control/goToPage';
import styles from './Narrative.scss';
export var Narrative = function (_a) {
    var children = _a.children;
    var fontSize = useSelector(configSelectors.fontSize);
    var lineHeight = useSelector(configSelectors.lineHeight);
    var narrativeStyle = { fontSize: "".concat(fontSize, "%") };
    var textStyle = { lineHeight: "".concat(lineHeight, "%") };
    var narrativeRef = useRef(null);
    useEffect(function () {
        var _a;
        // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
        (_a = narrativeRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    useEffect(function () {
        if (!narrativeRef.current) {
            return;
        }
        var hammertime = new Hammer(narrativeRef.current, { domEvents: true });
        hammertime.get('swipe').set({
            direction: Hammer.DIRECTION_HORIZONTAL,
            threshold: 50,
        });
        hammertime.on('swipe', function (e) {
            var direction = e.direction;
            var isNext = direction === Hammer.DIRECTION_LEFT;
            isNext ? goNextPage() : goPrevPage();
        });
        return function () {
            hammertime.off('swipe');
            hammertime.destroy();
        };
    }, []);
    return (_jsx("div", { ref: narrativeRef, className: styles.narrative, style: narrativeStyle, tabIndex: 0, children: _jsx("div", { className: styles.text, style: textStyle, children: children }) }));
};
//# sourceMappingURL=Narrative.js.map