"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOfContents = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("../Header");
var Overflow_1 = require("../Overflow");
var store_1 = require("../../store");
var main_1 = require("../../store/main");
var Item_1 = require("./Item");
var utils_1 = require("./utils");
var TableOfContents_scss_1 = __importDefault(require("./TableOfContents.scss"));
var TableOfContents = function () {
    var dispatch = (0, store_1.useDispatch)();
    var menuActiveState = (0, store_1.useSelector)(main_1.mainSelectors.menuActiveState);
    var isOpen = menuActiveState === 'tableOfContents';
    var closeButtonClickHandler = function () {
        dispatch(main_1.mainActions.setMenuActiveState(null));
    };
    return ((0, jsx_runtime_1.jsxs)(Overflow_1.Overflow, { isOpen: isOpen, children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { label: "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)("div", { className: TableOfContents_scss_1.default.itemsWrapper, children: utils_1.items.map(function (itemCur, index) { return (0, jsx_runtime_1.jsx)(Item_1.Item, __assign({}, itemCur), index); }) }), (0, jsx_runtime_1.jsx)("button", { className: TableOfContents_scss_1.default.button, onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
exports.TableOfContents = TableOfContents;
//# sourceMappingURL=TableOfContents.js.map