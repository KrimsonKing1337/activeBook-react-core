import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from 'react';
import Hammer from 'hammerjs';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './SlideShow.scss';
export var SlideShow = function (_a) {
    var _b, _c, _d;
    var children = _a.children, _e = _a.isVisible, isVisible = _e === void 0 ? true : _e, _f = _a.mode, mode = _f === void 0 ? null : _f, _g = _a.isWithoutBorders, isWithoutBorders = _g === void 0 ? false : _g, _h = _a.onSlideChange, onSlideChange = _h === void 0 ? function () {
    } : _h;
    var childrenAsArray = React.Children.toArray(children);
    // один slideIndex нужен для хаммера, другой для того чтобы useEffect срабатывал
    var slideIndexRef = useRef(0);
    var _j = useState(0), slideIndex = _j[0], setSlideIndex = _j[1];
    var _k = useState(false), isOverflow = _k[0], setIsOverflow = _k[1];
    var _l = useState(true), arrowsAreVisible = _l[0], setArrowsAreVisible = _l[1];
    var itemsWrapperRef = useRef(null);
    var wrapperRef = useRef(null);
    var setSlideShowTransformTranslateX = function (value) {
        var itemsWrapperElement = itemsWrapperRef === null || itemsWrapperRef === void 0 ? void 0 : itemsWrapperRef.current;
        if (!itemsWrapperElement) {
            return;
        }
        itemsWrapperElement.style.transform = "translateX(".concat(value, ")");
    };
    // сбрасываем состояние, если слайд-шоу скрывается (например, модалку закрыли)
    useEffect(function () {
        if (isVisible) {
            return;
        }
        slideIndexRef.current = 0;
        setSlideIndex(0);
        setIsOverflow(false);
        setSlideShowTransformTranslateX('0%');
    }, [isVisible]);
    useEffect(function () {
        var itemsWrapperElement = itemsWrapperRef === null || itemsWrapperRef === void 0 ? void 0 : itemsWrapperRef.current;
        if (!itemsWrapperElement) {
            return;
        }
        var isOverflow = itemsWrapperElement.offsetHeight > window.innerHeight;
        setIsOverflow(isOverflow);
    }, [slideIndex]);
    useEffect(function () {
        var current = wrapperRef.current;
        if (!current) {
            return;
        }
        var hammertime = new Hammer(current, { domEvents: true });
        hammertime.get('swipe').set({
            direction: Hammer.DIRECTION_HORIZONTAL,
            threshold: 50,
        });
        hammertime.on('tap', function (e) {
            var _a;
            var target = e.target;
            var attrOfOnlyIcon = 'data-icon';
            if (target.getAttribute(attrOfOnlyIcon)) {
                return;
            }
            if ((_a = target.firstElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute(attrOfOnlyIcon)) {
                return;
            }
        });
        hammertime.on('swipe', function (e) {
            e.srcEvent.stopPropagation();
            var direction = e.direction;
            var isNext = direction === Hammer.DIRECTION_LEFT;
            changeSlide(isNext);
        });
        return function () {
            hammertime.off('tap');
            hammertime.off('swipe');
            hammertime.destroy();
        };
    }, []);
    var changeSlide = function (isNext) {
        var nextIndex = isNext ? slideIndexRef.current + 1 : slideIndexRef.current - 1;
        var lastIndex = childrenAsArray.length - 1;
        if (nextIndex < 0) {
            nextIndex = lastIndex;
        }
        else if (nextIndex > lastIndex) {
            nextIndex = 0;
        }
        slideIndexRef.current = nextIndex;
        setSlideIndex(nextIndex);
        var newValue = Math.abs(nextIndex * 100);
        setSlideShowTransformTranslateX("-".concat(newValue, "%"));
        onSlideChange();
    };
    var wrapperClickHandler = function () {
        setArrowsAreVisible(!arrowsAreVisible);
    };
    var arrowClickHandler = function (e, isNext) {
        e.stopPropagation();
        changeSlide(isNext);
    };
    var isModalMode = mode === 'modal';
    var wrapperClassNames = classNames((_b = {},
        _b[styles.wrapper] = true,
        _b[styles.arrowsAreVisible] = arrowsAreVisible,
        _b[styles.isWithoutBorders] = isWithoutBorders || isModalMode,
        _b[styles.isModalMode] = isModalMode,
        _b));
    var slideShowClassNames = classNames((_c = {},
        _c[styles.slideShow] = true,
        _c[styles.isOverflow] = isOverflow,
        _c[styles.isModalMode] = isModalMode,
        _c));
    var itemsWrapperClassNames = classNames((_d = {},
        _d[styles.itemsWrapper] = true,
        _d[styles.isModalMode] = isModalMode,
        _d[styles.isOverflow] = isOverflow,
        _d));
    return (_jsxs("div", { ref: wrapperRef, className: wrapperClassNames, onClick: wrapperClickHandler, children: [_jsxs("div", { className: "SlideShowToolbar", children: [_jsx("div", { className: styles.left, onClick: function (e) { return arrowClickHandler(e, false); }, children: _jsx(FontAwesomeIcon, { icon: faArrowLeft }) }), _jsx("div", { className: styles.right, onClick: function (e) { return arrowClickHandler(e, true); }, children: _jsx(FontAwesomeIcon, { icon: faArrowRight }) })] }), _jsx("div", { className: slideShowClassNames, children: _jsx("div", { ref: itemsWrapperRef, className: itemsWrapperClassNames, children: childrenAsArray.map(function (childCur, index) {
                        var _a;
                        var itemClassNames = classNames((_a = {},
                            _a[styles.item] = true,
                            _a[styles.isActive] = index === slideIndex,
                            _a));
                        return (_jsx("div", { className: itemClassNames, children: childCur }, index));
                    }) }) })] }));
};
//# sourceMappingURL=SlideShow.js.map