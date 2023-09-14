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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Flags } from 'utils/effects/achievements/utils';
import { play } from 'utils/effects/achievements';
import { achievements } from 'utils/localStorage/achievements';
import { createDotsAsArray, getPlaceInLineByLocationStyles, orderDefaultState } from './utils';
import styles from './Dots.scss';
export var Dots = function () {
    var _a = useState(orderDefaultState), order = _a[0], setOrder = _a[1];
    useEffect(function () {
        var wasFound = achievements.get(Flags.superEasterEggFound);
        if (wasFound) {
            return;
        }
        var setValue = function (index) {
            var _a;
            var firstUnclicked = Object.values(order).indexOf(0);
            var keyStr = Object.keys(order)[firstUnclicked];
            var key = parseInt(keyStr, 10);
            var newValues = __assign(__assign({}, order), (_a = {}, _a[key] = index, _a));
            setOrder(newValues);
        };
        var listener = function (e) {
            var elementsUnderCursor = document.elementsFromPoint(e.clientX, e.clientY);
            if (!elementsUnderCursor) {
                return;
            }
            var dotElement = elementsUnderCursor.find(function (elementCur) {
                if (elementCur.parentElement) {
                    var str = elementCur.parentElement.classList.value;
                    if (str.includes('dotsWrapper')) {
                        return elementCur;
                    }
                }
                return false;
            });
            if (!dotElement) {
                return;
            }
            var computedStyles = window.getComputedStyle(dotElement);
            var styles = {
                top: computedStyles.top,
                right: computedStyles.right,
                bottom: computedStyles.bottom,
                left: computedStyles.left,
            };
            var placeInLine = getPlaceInLineByLocationStyles(styles);
            setValue(placeInLine);
        };
        document.addEventListener('click', listener, { passive: true });
        return function () {
            document.removeEventListener('click', listener);
        };
    }, [order, setOrder]);
    useEffect(function () {
        var orderValues = Object.values(order);
        var allClicked = orderValues.indexOf(0) === -1;
        if (!allClicked) {
            return;
        }
        var orderKeys = Object.keys(order);
        for (var i = 0; i < orderKeys.length; i++) {
            var keyCur = orderKeys[i];
            var valueCur = orderValues[i].toString();
            if (keyCur !== valueCur) {
                setOrder(orderDefaultState);
                return;
            }
        }
        play({
            id: Flags.superEasterEggFound,
            text: 'Суперсекрет! Не могу поверить, что ты это нашёл/нашла!',
            type: 'platinum',
        });
        return function () {
            setOrder(orderDefaultState);
        };
    }, [order]);
    var dots = createDotsAsArray();
    return (_jsx("div", { className: styles.dotsWrapper, children: dots.map(function (key) { return _jsx("div", { className: styles.dot }, key); }) }));
};
//# sourceMappingURL=Dots.js.map