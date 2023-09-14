"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmarks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../store");
var classnames_1 = __importDefault(require("classnames"));
var main_1 = require("../../store/main");
var bookmarks_1 = require("../../store/bookmarks");
var Header_1 = require("../Header");
var Overflow_1 = require("../Overflow");
var Item_1 = require("./Item");
var hooks_1 = require("./hooks");
var utils_1 = require("./utils");
var Bookmarks_scss_1 = __importDefault(require("./Bookmarks.scss"));
var buttonAddClassNames = (0, classnames_1.default)([Bookmarks_scss_1.default.button, Bookmarks_scss_1.default.isAdd]);
var Bookmarks = function () {
    var dispatch = (0, store_1.useDispatch)();
    var isOpen = (0, store_1.useSelector)(bookmarks_1.bookmarksSelectors.isOpen);
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    var _a = (0, hooks_1.useBookmarks)(), bookmarks = _a.bookmarks, setBookmarks = _a.setBookmarks;
    var closeButtonClickHandler = function () {
        dispatch(bookmarks_1.bookmarksActions.setIsOpen(false));
    };
    var addButtonClickHandler = function () {
        setBookmarks(__spreadArray(__spreadArray([], bookmarks, true), [page], false));
        (0, utils_1.playAchievement)();
    };
    var deleteHandler = function (bookmark) {
        var newBookmarks = __spreadArray([], bookmarks, true);
        var index = newBookmarks.indexOf(bookmark);
        newBookmarks.splice(index, 1);
        setBookmarks(newBookmarks);
    };
    return ((0, jsx_runtime_1.jsxs)(Overflow_1.Overflow, { isOpen: isOpen, children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { label: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438" }), (0, jsx_runtime_1.jsx)("div", { className: Bookmarks_scss_1.default.itemsWrapper, children: bookmarks.map(function (itemCur, index) { return (0, jsx_runtime_1.jsx)(Item_1.Item, { pageNumber: itemCur, onDelete: deleteHandler }, index); }) }), (0, jsx_runtime_1.jsxs)("div", { className: Bookmarks_scss_1.default.footer, children: [(0, jsx_runtime_1.jsx)("button", { className: buttonAddClassNames, onClick: addButtonClickHandler, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" }), (0, jsx_runtime_1.jsx)("button", { className: Bookmarks_scss_1.default.button, onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] })] }));
};
exports.Bookmarks = Bookmarks;
//# sourceMappingURL=Bookmarks.js.map