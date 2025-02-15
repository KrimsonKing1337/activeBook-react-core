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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';
import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';
import { Item } from './Item';
import { items } from './utils';
import styles from './TableOfContents.scss';
export var TableOfContents = function () {
    var dispatch = useDispatch();
    var menuActiveState = useSelector(mainSelectors.menuActiveState);
    var isOpen = menuActiveState === 'tableOfContents';
    var closeButtonClickHandler = function () {
        dispatch(mainActions.setMenuActiveState(null));
    };
    return (_jsxs(Overflow, { isOpen: isOpen, children: [_jsx(Header, { label: "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435" }), _jsx("div", { className: styles.itemsWrapper, children: items.map(function (itemCur, index) { return _jsx(Item, __assign({}, itemCur), index); }) }), _jsx("button", { className: styles.button, onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
//# sourceMappingURL=TableOfContents.js.map