var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Hammer from 'hammerjs';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './SlideShow.scss';
// пришлось переписать компонент на классовый, чтобы Hammer не дёргался на "каждый чих". см SlideShowOnHooks.tsx
var SlideShow = /** @class */ (function (_super) {
    __extends(SlideShow, _super);
    function SlideShow(props) {
        var _this = _super.call(this, props) || this;
        _this.childrenAsArray = React.Children.toArray(_this.props.children);
        _this.setSlideShowTransformTranslateX = function (value) {
            var _a;
            var itemsWrapperElement = (_a = _this.itemsWrapperRef) === null || _a === void 0 ? void 0 : _a.current;
            if (!itemsWrapperElement) {
                return;
            }
            itemsWrapperElement.style.transform = "translateX(".concat(value, ")");
        };
        _this.changeSlide = function (isNext) {
            var slideIndex = _this.state.slideIndex;
            var onSlideChange = _this.props.onSlideChange;
            var nextIndex = isNext ? slideIndex + 1 : slideIndex - 1;
            var lastIndex = _this.childrenAsArray.length - 1;
            if (nextIndex < 0) {
                nextIndex = lastIndex;
            }
            else if (nextIndex > lastIndex) {
                nextIndex = 0;
            }
            _this.setState({
                slideIndex: nextIndex,
            });
            var newValue = Math.abs(nextIndex * 100);
            _this.setSlideShowTransformTranslateX("-".concat(newValue, "%"));
            if (onSlideChange) {
                onSlideChange();
            }
        };
        _this.setIsOverflow = function () {
            var _a;
            if (_this.props.mode !== 'modal') {
                return;
            }
            var slideShowElement = (_a = _this.slideShowRef) === null || _a === void 0 ? void 0 : _a.current;
            if (!slideShowElement) {
                return;
            }
            var activeItem = slideShowElement.querySelector(".".concat(styles.isActive));
            if (!activeItem) {
                return;
            }
            var isOverflow = activeItem.offsetHeight > slideShowElement.offsetHeight;
            _this.setState({ isOverflow: isOverflow });
        };
        _this.isNotVisibleHandler = function () {
            _this.setState({
                slideIndex: 0,
                isOverflow: false,
            });
            _this.setSlideShowTransformTranslateX('0%');
        };
        _this.wrapperClickHandler = function () {
            var arrowsAreVisible = _this.state.arrowsAreVisible;
            _this.setState({
                arrowsAreVisible: !arrowsAreVisible,
            });
        };
        _this.arrowClickHandler = function (e, isNext) {
            e.stopPropagation();
            _this.changeSlide(isNext);
        };
        _this.itemsWrapperRef = React.createRef();
        _this.wrapperRef = React.createRef();
        _this.slideShowRef = React.createRef();
        _this.hammertime = null;
        _this.state = {
            slideIndex: 0,
            isOverflow: false,
            arrowsAreVisible: false,
        };
        return _this;
    }
    SlideShow.prototype.componentDidMount = function () {
        var _this = this;
        var current = this.wrapperRef.current;
        if (!current) {
            return;
        }
        this.hammertime = new Hammer(current, { domEvents: true });
        this.hammertime.get('swipe').set({
            direction: Hammer.DIRECTION_HORIZONTAL,
            threshold: 50,
        });
        // обработчик именно здесь, чтобы onClick не срабатывал вместе с Hammer.swipe. Hammer сам разрулит эту проблему
        this.hammertime.on('tap', function (e) {
            var _a;
            var target = e.target;
            var attrOfOnlyIcon = 'data-icon';
            if (target.getAttribute(attrOfOnlyIcon)) {
                return;
            }
            if ((_a = target.firstElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute(attrOfOnlyIcon)) {
                return;
            }
            _this.wrapperClickHandler();
        });
        this.hammertime.on('swipe', function (e) {
            var direction = e.direction;
            var isNext = direction === Hammer.DIRECTION_LEFT;
            _this.changeSlide(isNext);
        });
    };
    SlideShow.prototype.componentWillUnmount = function () {
        if (!this.hammertime) {
            return;
        }
        this.hammertime.off('tap');
        this.hammertime.off('swipe');
        this.hammertime.destroy();
    };
    SlideShow.prototype.componentDidUpdate = function (prevProps, prevState) {
        var isVisible = this.props.isVisible;
        var slideIndex = this.state.slideIndex;
        if (isVisible !== prevProps.isVisible && !isVisible) {
            this.isNotVisibleHandler();
        }
        if (slideIndex !== prevState.slideIndex) {
            this.setIsOverflow();
        }
    };
    SlideShow.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var _d = this.props, isWithoutBorders = _d.isWithoutBorders, mode = _d.mode;
        var _e = this.state, slideIndex = _e.slideIndex, isOverflow = _e.isOverflow, arrowsAreVisible = _e.arrowsAreVisible;
        var isModalMode = mode === 'modal';
        var wrapperClassNames = classNames((_a = {},
            _a[styles.wrapper] = true,
            _a[styles.arrowsAreVisible] = arrowsAreVisible,
            _a[styles.isWithoutBorders] = isWithoutBorders || isModalMode,
            _a[styles.isModalMode] = isModalMode,
            _a));
        var slideShowClassNames = classNames((_b = {},
            _b[styles.slideShow] = true,
            _b[styles.isOverflow] = isOverflow,
            _b[styles.isModalMode] = isModalMode,
            _b));
        var itemsWrapperClassNames = classNames((_c = {},
            _c[styles.itemsWrapper] = true,
            _c[styles.isModalMode] = isModalMode,
            _c[styles.isOverflow] = isOverflow,
            _c));
        return (_jsxs("div", { ref: this.wrapperRef, className: wrapperClassNames, children: [_jsxs("div", { className: "SlideShowToolbar", children: [_jsx("div", { className: styles.left, onClick: function (e) { return _this.arrowClickHandler(e, false); }, children: _jsx(FontAwesomeIcon, { icon: faArrowLeft }) }), _jsx("div", { className: styles.right, onClick: function (e) { return _this.arrowClickHandler(e, true); }, children: _jsx(FontAwesomeIcon, { icon: faArrowRight }) })] }), _jsx("div", { ref: this.slideShowRef, className: slideShowClassNames, children: _jsx("div", { ref: this.itemsWrapperRef, className: itemsWrapperClassNames, children: this.childrenAsArray.map(function (childCur, index) {
                            var _a;
                            var itemClassNames = classNames((_a = {},
                                _a[styles.item] = true,
                                _a[styles.isActive] = index === slideIndex,
                                _a));
                            return (_jsx("div", { className: itemClassNames, children: childCur }, index));
                        }) }) })] }));
    };
    SlideShow.defaultProps = {
        isVisible: false,
        isWithoutBorders: false,
        mode: null,
        onSlideChange: function () {
        },
    };
    return SlideShow;
}(React.Component));
export { SlideShow };
//# sourceMappingURL=SlideShowOnClass.js.map