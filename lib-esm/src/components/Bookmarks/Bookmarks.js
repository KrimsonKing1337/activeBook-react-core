var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useDispatch, useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';
import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';
import { Item } from './Item';
import { useBookmarks } from './hooks';
import { playAchievement } from './utils';
import styles from './Bookmarks.scss';
var buttonAddClassNames = classNames([styles.button, styles.isAdd]);
export var Bookmarks = function () {
    var dispatch = useDispatch();
    var isOpen = useSelector(bookmarksSelectors.isOpen);
    var page = useSelector(mainSelectors.page);
    var _a = useBookmarks(), bookmarks = _a.bookmarks, setBookmarks = _a.setBookmarks;
    var closeButtonClickHandler = function () {
        dispatch(bookmarksActions.setIsOpen(false));
    };
    var addButtonClickHandler = function () {
        setBookmarks(__spreadArray(__spreadArray([], bookmarks, true), [page], false));
        playAchievement();
    };
    var deleteHandler = function (bookmark) {
        var newBookmarks = __spreadArray([], bookmarks, true);
        var index = newBookmarks.indexOf(bookmark);
        newBookmarks.splice(index, 1);
        setBookmarks(newBookmarks);
    };
    return (_jsxs(Overflow, { isOpen: isOpen, children: [_jsx(Header, { label: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438" }), _jsx("div", { className: styles.itemsWrapper, children: bookmarks.map(function (itemCur, index) { return _jsx(Item, { pageNumber: itemCur, onDelete: deleteHandler }, index); }) }), _jsxs("div", { className: styles.footer, children: [_jsx("button", { className: buttonAddClassNames, onClick: addButtonClickHandler, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" }), _jsx("button", { className: styles.button, onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] })] }));
};
//# sourceMappingURL=Bookmarks.js.map