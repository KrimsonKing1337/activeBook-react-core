"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var Toolbar_1 = require("../Toolbar");
var Menu_1 = require("../Menu");
var AchievementsProgress_1 = require("../AchievementsProgress");
var TableOfContents_1 = require("../TableOfContents");
var Bookmarks_1 = require("../Bookmarks");
var SideEffects_1 = require("../SideEffects");
var BackgroundEffects_1 = require("../BackgroundEffects");
var BackgroundComponent_1 = require("../BackgroundComponent");
var main_1 = require("../../store/main");
var common_1 = require("../../store/effects/common");
var store_1 = require("../../store");
var Narrative_1 = require("./components/Narrative");
var PageWrapper_scss_1 = __importDefault(require("./PageWrapper.scss"));
var PageWrapper = function (_a) {
    var _b, _c;
    var children = _a.children, backgroundComponent = _a.backgroundComponent, withoutToolbar = _a.withoutToolbar, sbMode = _a.sbMode;
    var inverseColorIsActive = (0, store_1.useSelector)(common_1.effectsSelectors.inverseColorIsActive);
    var isLoading = (0, store_1.useSelector)(main_1.mainSelectors.isLoading);
    var pageWrapperClassNames = (0, classnames_1.default)((_b = {},
        _b[PageWrapper_scss_1.default.pageWrapper] = true,
        _b[PageWrapper_scss_1.default.inverseColorIsActive] = inverseColorIsActive,
        _b));
    var mainContendClassNames = (0, classnames_1.default)((_c = {},
        _c[PageWrapper_scss_1.default.mainContent] = true,
        _c[PageWrapper_scss_1.default.isLoading] = isLoading,
        _c));
    return ((0, jsx_runtime_1.jsx)("div", { className: pageWrapperClassNames, children: (0, jsx_runtime_1.jsxs)("div", { className: mainContendClassNames, children: [(0, jsx_runtime_1.jsx)(Narrative_1.Narrative, { children: children }), (0, jsx_runtime_1.jsx)(SideEffects_1.SideEffects, {}), (0, jsx_runtime_1.jsx)(BackgroundEffects_1.BackgroundEffects, {}), (0, jsx_runtime_1.jsx)(BackgroundComponent_1.BackgroundComponent, { withShadow: backgroundComponent === null || backgroundComponent === void 0 ? void 0 : backgroundComponent.withShadow, children: backgroundComponent === null || backgroundComponent === void 0 ? void 0 : backgroundComponent.Component }), !withoutToolbar && ((0, jsx_runtime_1.jsx)(Toolbar_1.Toolbar, { sbMode: sbMode })), (0, jsx_runtime_1.jsx)(Menu_1.Menu, {}), (0, jsx_runtime_1.jsx)(TableOfContents_1.TableOfContents, {}), (0, jsx_runtime_1.jsx)(Bookmarks_1.Bookmarks, {}), (0, jsx_runtime_1.jsx)(AchievementsProgress_1.AchievementsProgress, {})] }) }));
};
exports.PageWrapper = PageWrapper;
//# sourceMappingURL=PageWrapper.js.map