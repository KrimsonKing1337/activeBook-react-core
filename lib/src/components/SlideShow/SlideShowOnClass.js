"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideShow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var hammerjs_1 = __importDefault(require("hammerjs"));
var classnames_1 = __importDefault(require("classnames"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var SlideShow_scss_1 = __importDefault(require("./SlideShow.scss"));
// пришлось переписать компонент на классовый, чтобы Hammer не дёргался на "каждый чих". см SlideShowOnHooks.tsx
var SlideShow = /** @class */ (function (_super) {
    __extends(SlideShow, _super);
    function SlideShow(props) {
        var _this = _super.call(this, props) || this;
        _this.childrenAsArray = react_1.default.Children.toArray(_this.props.children);
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
            var activeItem = slideShowElement.querySelector(".".concat(SlideShow_scss_1.default.isActive));
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
        _this.itemsWrapperRef = react_1.default.createRef();
        _this.wrapperRef = react_1.default.createRef();
        _this.slideShowRef = react_1.default.createRef();
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
        this.hammertime = new hammerjs_1.default(current, { domEvents: true });
        this.hammertime.get('swipe').set({
            direction: hammerjs_1.default.DIRECTION_HORIZONTAL,
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
            var isNext = direction === hammerjs_1.default.DIRECTION_LEFT;
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
        var wrapperClassNames = (0, classnames_1.default)((_a = {},
            _a[SlideShow_scss_1.default.wrapper] = true,
            _a[SlideShow_scss_1.default.arrowsAreVisible] = arrowsAreVisible,
            _a[SlideShow_scss_1.default.isWithoutBorders] = isWithoutBorders || isModalMode,
            _a[SlideShow_scss_1.default.isModalMode] = isModalMode,
            _a));
        var slideShowClassNames = (0, classnames_1.default)((_b = {},
            _b[SlideShow_scss_1.default.slideShow] = true,
            _b[SlideShow_scss_1.default.isOverflow] = isOverflow,
            _b[SlideShow_scss_1.default.isModalMode] = isModalMode,
            _b));
        var itemsWrapperClassNames = (0, classnames_1.default)((_c = {},
            _c[SlideShow_scss_1.default.itemsWrapper] = true,
            _c[SlideShow_scss_1.default.isModalMode] = isModalMode,
            _c[SlideShow_scss_1.default.isOverflow] = isOverflow,
            _c));
        return ((0, jsx_runtime_1.jsxs)("div", { ref: this.wrapperRef, className: wrapperClassNames, children: [(0, jsx_runtime_1.jsxs)("div", { className: "SlideShowToolbar", children: [(0, jsx_runtime_1.jsx)("div", { className: SlideShow_scss_1.default.left, onClick: function (e) { return _this.arrowClickHandler(e, false); }, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft }) }), (0, jsx_runtime_1.jsx)("div", { className: SlideShow_scss_1.default.right, onClick: function (e) { return _this.arrowClickHandler(e, true); }, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight }) })] }), (0, jsx_runtime_1.jsx)("div", { ref: this.slideShowRef, className: slideShowClassNames, children: (0, jsx_runtime_1.jsx)("div", { ref: this.itemsWrapperRef, className: itemsWrapperClassNames, children: this.childrenAsArray.map(function (childCur, index) {
                            var _a;
                            var itemClassNames = (0, classnames_1.default)((_a = {},
                                _a[SlideShow_scss_1.default.item] = true,
                                _a[SlideShow_scss_1.default.isActive] = index === slideIndex,
                                _a));
                            return ((0, jsx_runtime_1.jsx)("div", { className: itemClassNames, children: childCur }, index));
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
}(react_1.default.Component));
exports.SlideShow = SlideShow;
//# sourceMappingURL=SlideShowOnClass.js.map