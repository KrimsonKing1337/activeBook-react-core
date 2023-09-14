"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../store");
var main_1 = require("../../store/main");
var config_1 = require("../../store/config");
var bookmarks_1 = require("../../store/bookmarks");
var getNewValueForNarrativeTextStyle_1 = require("../../utils/styles/getNewValueForNarrativeTextStyle");
var i_bookmark_svg_1 = __importDefault(require("../../assets/img/toolbar/i-bookmark.svg"));
var i_font_small_svg_1 = __importDefault(require("../../assets/img/toolbar/i-font-small.svg"));
var i_font_big_svg_1 = __importDefault(require("../../assets/img/toolbar/i-font-big.svg"));
var i_etc_svg_1 = __importDefault(require("../../assets/img/toolbar/i-etc.svg"));
var Item_1 = require("./components/Item");
var Nav_1 = require("./components/Nav");
var utils_1 = require("./utils");
var Toolbar_scss_1 = __importDefault(require("./Toolbar.scss"));
var Toolbar = function (_a) {
    var sbMode = _a.sbMode;
    var dispatch = (0, store_1.useDispatch)();
    var fontSize = (0, store_1.useSelector)(config_1.configSelectors.fontSize);
    var dispatchSetFontSize = function (isMoreAction) {
        var fontSizeNewValue = (0, getNewValueForNarrativeTextStyle_1.getNewValueForNarrativeTextStyle)(fontSize, isMoreAction);
        if (fontSizeNewValue === fontSize) {
            return;
        }
        dispatch(config_1.configActions.setFontSize(fontSizeNewValue));
        (0, utils_1.playAchievement)();
    };
    var bookmarkClickHandler = function () {
        dispatch(bookmarks_1.bookmarksActions.setIsOpen(true));
    };
    var etcIconClickHandler = function () {
        dispatch(main_1.mainActions.setMenuActiveState('menu'));
    };
    var fontSmallClickHandler = function () {
        dispatchSetFontSize(false);
    };
    var fontBigClickHandler = function () {
        dispatchSetFontSize(true);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: Toolbar_scss_1.default.wrapper, children: (0, jsx_runtime_1.jsxs)("div", { className: Toolbar_scss_1.default.toolbar, children: [!sbMode && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Item_1.Item, { onClick: bookmarkClickHandler, children: (0, jsx_runtime_1.jsx)(i_bookmark_svg_1.default, {}) }), (0, jsx_runtime_1.jsx)(Item_1.Item, { children: (0, jsx_runtime_1.jsx)(Nav_1.Nav, {}) })] })), (0, jsx_runtime_1.jsx)(Item_1.Item, { onClick: fontSmallClickHandler, children: (0, jsx_runtime_1.jsx)(i_font_small_svg_1.default, {}) }), (0, jsx_runtime_1.jsx)(Item_1.Item, { className: Toolbar_scss_1.default.fontBig, onClick: fontBigClickHandler, children: (0, jsx_runtime_1.jsx)(i_font_big_svg_1.default, {}) }), (0, jsx_runtime_1.jsx)(Item_1.Item, { onClick: etcIconClickHandler, children: (0, jsx_runtime_1.jsx)(i_etc_svg_1.default, {}) })] }) }));
};
exports.Toolbar = Toolbar;
//# sourceMappingURL=Toolbar.js.map