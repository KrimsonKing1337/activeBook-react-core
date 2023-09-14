"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../../../store");
var main_1 = require("../../../../store/main");
var goToPage_1 = require("../../../../utils/control/goToPage");
var i_arrow_left_svg_1 = __importDefault(require("../../../../assets/img/toolbar/i-arrow-left.svg"));
var i_arrow_right_svg_1 = __importDefault(require("../../../../assets/img/toolbar/i-arrow-right.svg"));
var Item_1 = require("../../../Toolbar/components/Item");
var Nav_scss_1 = __importDefault(require("./Nav.scss"));
var Nav = function () {
    var _a, _b;
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    var pages = (0, store_1.useSelector)(main_1.mainSelectors.pages);
    var inputRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(true), goToWithInputIsHide = _c[0], setGoToWithInputIsHide = _c[1];
    var _d = (0, react_1.useState)(''), inputValue = _d[0], setInputValue = _d[1];
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    (0, react_1.useEffect)(function () {
        var keypressHandler = function (e) {
            var key = e.key;
            if (key !== 'Enter' || goToWithInputIsHide) {
                return;
            }
            go();
        };
        document.addEventListener('keypress', keypressHandler);
        return function () {
            document.removeEventListener('keypress', keypressHandler);
        };
    }, [goToWithInputIsHide, inputValue]);
    var prevClickHandler = function () {
        (0, goToPage_1.goPrevPage)();
    };
    var nextClickHandler = function () {
        (0, goToPage_1.goNextPage)();
    };
    var pageNumberClickHandler = function () {
        setGoToWithInputIsHide(false);
    };
    var go = function () {
        var pageNumber = parseInt(inputValue);
        if (isNaN(pageNumber) || page === pageNumber) {
            return;
        }
        if (pageNumber > pages) {
            pageNumber = pages;
        }
        setGoToWithInputIsHide(true);
        (0, goToPage_1.goToPage)(pageNumber);
    };
    var buttonClickHandler = function () {
        go();
    };
    var inputBlurHandler = function () {
        setGoToWithInputIsHide(true);
    };
    var inputChangeHandler = function (e) {
        setInputValue(e.target.value);
    };
    var goToWithArrowsClassNames = (0, classnames_1.default)((_a = {},
        _a[Nav_scss_1.default.goToWithArrows] = true,
        _a[Nav_scss_1.default.isHide] = !goToWithInputIsHide,
        _a));
    var goToWithInputClassNames = (0, classnames_1.default)((_b = {},
        _b[Nav_scss_1.default.goToWithInput] = true,
        _b[Nav_scss_1.default.isHide] = goToWithInputIsHide,
        _b));
    /**
     * из-за того, что используется хак для тачей в виде addTouchSupportForCssHover(),
     * придётся отказаться от логики if/else и переключать видимость элементов по-старинке через css-классы.
     * конструкция вида ```isHide && (<div></div>)``` удаляет элемент физически из DOM-а.
     * и функция addTouchSupportForCssHover не может при инициализации приложения накинуть соответствующие обработчики.
     *
     * есть второй путь: при ре-рендере каждый раз запускать addTouchSupportForCssHover(),
     * но мне кажется, что это будет слишком "дорого" и неудобно.
     * возможно, вернусь к этому позже
     * */
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: goToWithArrowsClassNames, children: [(0, jsx_runtime_1.jsx)(Item_1.Item, { onClick: prevClickHandler, children: (0, jsx_runtime_1.jsx)(i_arrow_left_svg_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: Nav_scss_1.default.pageNumber, onClick: pageNumberClickHandler, children: [page, " \u0438\u0437 ", pages] }), (0, jsx_runtime_1.jsx)(Item_1.Item, { onClick: nextClickHandler, children: (0, jsx_runtime_1.jsx)(i_arrow_right_svg_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)("div", { className: goToWithInputClassNames, children: [(0, jsx_runtime_1.jsx)("div", { className: Nav_scss_1.default.wrapperInput, children: (0, jsx_runtime_1.jsx)("input", { ref: inputRef, onChange: inputChangeHandler, onBlur: inputBlurHandler, className: Nav_scss_1.default.input, type: "number", min: "0", inputMode: "numeric", value: inputValue, pattern: "[0-9]", placeholder: page.toString() }) }), (0, jsx_runtime_1.jsx)("button", { className: Nav_scss_1.default.button, onMouseDown: buttonClickHandler, children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438" })] })] }));
};
exports.Nav = Nav;
//# sourceMappingURL=Nav.js.map