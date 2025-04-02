"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Overflow_1 = require("../Overflow");
var Header_1 = require("../Header");
var store_1 = require("../../store");
var main_1 = require("../../store/main");
var achievements_1 = require("../../store/achievements");
var bookmarks_1 = require("../../store/bookmarks");
var components_1 = require("./components");
var Menu = function () {
    var dispatch = (0, store_1.useDispatch)();
    var location = (0, react_router_dom_1.useLocation)();
    var menuActiveState = (0, store_1.useSelector)(main_1.mainSelectors.menuActiveState);
    var achievements = (0, store_1.useSelector)(achievements_1.achievementsSelectors.achievements);
    var bookmarksIsOpen = (0, store_1.useSelector)(bookmarks_1.bookmarksSelectors.isOpen);
    var allPagesSeen = achievements === null || achievements === void 0 ? void 0 : achievements.allPagesSeen;
    var isOpen = menuActiveState === 'menu';
    // закрываю менюшки, если пользователь сделал navigator.goBack
    (0, react_1.useEffect)(function () {
        if (!location.hash) {
            if (menuActiveState !== null) {
                dispatch(main_1.mainActions.setMenuActiveState(null));
            }
            if (bookmarksIsOpen) {
                dispatch(bookmarks_1.bookmarksActions.setIsOpen(false));
            }
        }
        else if (location.hash === '#menu') {
            if (menuActiveState === 'tableOfContents' || menuActiveState === 'achievementsProgress') {
                dispatch(main_1.mainActions.setMenuActiveState(null));
            }
        }
    }, [location, menuActiveState, bookmarksIsOpen]);
    return ((0, jsx_runtime_1.jsxs)(Overflow_1.Overflow, { isOpen: isOpen, children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" }), (0, jsx_runtime_1.jsx)(components_1.Volume, {}), (0, jsx_runtime_1.jsx)(components_1.Themes, {}), (0, jsx_runtime_1.jsx)(components_1.WelcomeTour, {}), (0, jsx_runtime_1.jsx)(components_1.Vibration, {}), (0, jsx_runtime_1.jsx)(components_1.Flashlight, {}), allPagesSeen && ((0, jsx_runtime_1.jsx)(components_1.AuthorComments, {})), (0, jsx_runtime_1.jsx)(components_1.LineHeight, {}), (0, jsx_runtime_1.jsx)(components_1.Footer, {})] }));
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map