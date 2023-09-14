"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideShow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var hammerjs_1 = __importDefault(require("hammerjs"));
var classnames_1 = __importDefault(require("classnames"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var SlideShow_scss_1 = __importDefault(require("./SlideShow.scss"));
var SlideShow = function (_a) {
    var _b, _c, _d;
    var children = _a.children, _e = _a.isVisible, isVisible = _e === void 0 ? true : _e, _f = _a.mode, mode = _f === void 0 ? null : _f, _g = _a.isWithoutBorders, isWithoutBorders = _g === void 0 ? false : _g, _h = _a.onSlideChange, onSlideChange = _h === void 0 ? function () {
    } : _h;
    var childrenAsArray = react_1.default.Children.toArray(children);
    // один slideIndex нужен для хаммера, другой для того чтобы useEffect срабатывал
    var slideIndexRef = (0, react_1.useRef)(0);
    var _j = (0, react_1.useState)(0), slideIndex = _j[0], setSlideIndex = _j[1];
    var _k = (0, react_1.useState)(false), isOverflow = _k[0], setIsOverflow = _k[1];
    var _l = (0, react_1.useState)(true), arrowsAreVisible = _l[0], setArrowsAreVisible = _l[1];
    var itemsWrapperRef = (0, react_1.useRef)(null);
    var wrapperRef = (0, react_1.useRef)(null);
    var setSlideShowTransformTranslateX = function (value) {
        var itemsWrapperElement = itemsWrapperRef === null || itemsWrapperRef === void 0 ? void 0 : itemsWrapperRef.current;
        if (!itemsWrapperElement) {
            return;
        }
        itemsWrapperElement.style.transform = "translateX(".concat(value, ")");
    };
    // сбрасываем состояние, если слайд-шоу скрывается (например, модалку закрыли)
    (0, react_1.useEffect)(function () {
        if (isVisible) {
            return;
        }
        slideIndexRef.current = 0;
        setSlideIndex(0);
        setIsOverflow(false);
        setSlideShowTransformTranslateX('0%');
    }, [isVisible]);
    (0, react_1.useEffect)(function () {
        var itemsWrapperElement = itemsWrapperRef === null || itemsWrapperRef === void 0 ? void 0 : itemsWrapperRef.current;
        if (!itemsWrapperElement) {
            return;
        }
        var isOverflow = itemsWrapperElement.offsetHeight > window.innerHeight;
        setIsOverflow(isOverflow);
    }, [slideIndex]);
    (0, react_1.useEffect)(function () {
        var current = wrapperRef.current;
        if (!current) {
            return;
        }
        var hammertime = new hammerjs_1.default(current, { domEvents: true });
        hammertime.get('swipe').set({
            direction: hammerjs_1.default.DIRECTION_HORIZONTAL,
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
            var isNext = direction === hammerjs_1.default.DIRECTION_LEFT;
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
    var wrapperClassNames = (0, classnames_1.default)((_b = {},
        _b[SlideShow_scss_1.default.wrapper] = true,
        _b[SlideShow_scss_1.default.arrowsAreVisible] = arrowsAreVisible,
        _b[SlideShow_scss_1.default.isWithoutBorders] = isWithoutBorders || isModalMode,
        _b[SlideShow_scss_1.default.isModalMode] = isModalMode,
        _b));
    var slideShowClassNames = (0, classnames_1.default)((_c = {},
        _c[SlideShow_scss_1.default.slideShow] = true,
        _c[SlideShow_scss_1.default.isOverflow] = isOverflow,
        _c[SlideShow_scss_1.default.isModalMode] = isModalMode,
        _c));
    var itemsWrapperClassNames = (0, classnames_1.default)((_d = {},
        _d[SlideShow_scss_1.default.itemsWrapper] = true,
        _d[SlideShow_scss_1.default.isModalMode] = isModalMode,
        _d[SlideShow_scss_1.default.isOverflow] = isOverflow,
        _d));
    return ((0, jsx_runtime_1.jsxs)("div", { ref: wrapperRef, className: wrapperClassNames, onClick: wrapperClickHandler, children: [(0, jsx_runtime_1.jsxs)("div", { className: "SlideShowToolbar", children: [(0, jsx_runtime_1.jsx)("div", { className: SlideShow_scss_1.default.left, onClick: function (e) { return arrowClickHandler(e, false); }, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft }) }), (0, jsx_runtime_1.jsx)("div", { className: SlideShow_scss_1.default.right, onClick: function (e) { return arrowClickHandler(e, true); }, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight }) })] }), (0, jsx_runtime_1.jsx)("div", { className: slideShowClassNames, children: (0, jsx_runtime_1.jsx)("div", { ref: itemsWrapperRef, className: itemsWrapperClassNames, children: childrenAsArray.map(function (childCur, index) {
                        var _a;
                        var itemClassNames = (0, classnames_1.default)((_a = {},
                            _a[SlideShow_scss_1.default.item] = true,
                            _a[SlideShow_scss_1.default.isActive] = index === slideIndex,
                            _a));
                        return ((0, jsx_runtime_1.jsx)("div", { className: itemClassNames, children: childCur }, index));
                    }) }) })] }));
};
exports.SlideShow = SlideShow;
//# sourceMappingURL=SlideShow.js.map