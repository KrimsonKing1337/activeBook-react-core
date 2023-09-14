import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { goNextPage, goPrevPage, goToPage } from 'utils/control/goToPage';
import ArrowLeft from 'assets/img/toolbar/i-arrow-left.svg';
import ArrowRight from 'assets/img/toolbar/i-arrow-right.svg';
import { Item } from 'components/Toolbar/components/Item';
import styles from './Nav.scss';
export var Nav = function () {
    var _a, _b;
    var page = useSelector(mainSelectors.page);
    var pages = useSelector(mainSelectors.pages);
    var inputRef = useRef(null);
    var _c = useState(true), goToWithInputIsHide = _c[0], setGoToWithInputIsHide = _c[1];
    var _d = useState(''), inputValue = _d[0], setInputValue = _d[1];
    useEffect(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    useEffect(function () {
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
        goPrevPage();
    };
    var nextClickHandler = function () {
        goNextPage();
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
        goToPage(pageNumber);
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
    var goToWithArrowsClassNames = classNames((_a = {},
        _a[styles.goToWithArrows] = true,
        _a[styles.isHide] = !goToWithInputIsHide,
        _a));
    var goToWithInputClassNames = classNames((_b = {},
        _b[styles.goToWithInput] = true,
        _b[styles.isHide] = goToWithInputIsHide,
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: goToWithArrowsClassNames, children: [_jsx(Item, { onClick: prevClickHandler, children: _jsx(ArrowLeft, {}) }), _jsxs("div", { className: styles.pageNumber, onClick: pageNumberClickHandler, children: [page, " \u0438\u0437 ", pages] }), _jsx(Item, { onClick: nextClickHandler, children: _jsx(ArrowRight, {}) })] }), _jsxs("div", { className: goToWithInputClassNames, children: [_jsx("div", { className: styles.wrapperInput, children: _jsx("input", { ref: inputRef, onChange: inputChangeHandler, onBlur: inputBlurHandler, className: styles.input, type: "number", min: "0", inputMode: "numeric", value: inputValue, pattern: "[0-9]", placeholder: page.toString() }) }), _jsx("button", { className: styles.button, onMouseDown: buttonClickHandler, children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438" })] })] }));
};
//# sourceMappingURL=Nav.js.map