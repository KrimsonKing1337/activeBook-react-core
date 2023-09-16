"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Themes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var store_1 = require("../../../../store");
var config_1 = require("../../../../store/config");
var Label_1 = require("../../../Label");
var Spoiler_1 = require("../../../Spoiler");
var getIsMobile_1 = require("../../../../utils/mobile/getIsMobile");
var utils_1 = require("./utils");
var Themes_scss_1 = __importDefault(require("./Themes.scss"));
var isMobile = (0, getIsMobile_1.getIsMobile)();
var Themes = function () {
    var dispatch = (0, store_1.useDispatch)();
    var activeTheme = (0, store_1.useSelector)(config_1.configSelectors.theme);
    var clickHandler = function (theme) {
        dispatch(config_1.configActions.setTheme(theme));
        (0, utils_1.playAchievement)();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Themes_scss_1.default.themes, children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)("div", { className: Themes_scss_1.default.themesItemsWrapper, children: utils_1.themes.map(function (themeCur) { return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.getClassNames)(themeCur), onClick: function () { return clickHandler(themeCur); }, children: activeTheme === themeCur && (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCheck }) }, themeCur)); }) }), isMobile && ((0, jsx_runtime_1.jsxs)(Spoiler_1.Spoiler, { label: "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435", className: Themes_scss_1.default.spoiler, children: ["\u0415\u0441\u043B\u0438 \u0446\u0432\u0435\u0442\u0430 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E - \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0451\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0443 Xiaomi \u044D\u0442\u043E \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ", '->', " \u042D\u043A\u0440\u0430\u043D ", '->', " \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u0451\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430. \u0422\u0430\u043C \u043D\u0430\u0439\u0442\u0438 activeBook \u0438 \u0443\u0431\u0435\u0434\u0438\u0442\u044C\u0441\u044F, \u0447\u0442\u043E \u0442\u0443\u0434\u0430-\u0441\u044E\u0434\u0430\u0448\u0435\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \"\u0432\u043A\u043B\""] }))] }));
};
exports.Themes = Themes;
//# sourceMappingURL=Themes.js.map