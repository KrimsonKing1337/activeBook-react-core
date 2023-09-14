"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../../../store");
var main_1 = require("../../../../store/main");
var Footer_scss_1 = __importDefault(require("./Footer.scss"));
function getClassNames(className) {
    return (0, classnames_1.default)([
        Footer_scss_1.default.button,
        className,
    ]);
}
var Footer = function () {
    var dispatch = (0, store_1.useDispatch)();
    var tableOfContentsButtonClickHandler = function () {
        dispatch(main_1.mainActions.setMenuActiveState('tableOfContents'));
    };
    var achievementsProgressClickHandler = function () {
        dispatch(main_1.mainActions.setMenuActiveState('achievementsProgress'));
    };
    var closeButtonClickHandler = function () {
        dispatch(main_1.mainActions.setMenuActiveState(null));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Footer_scss_1.default.footer, children: [(0, jsx_runtime_1.jsx)("button", { className: getClassNames(Footer_scss_1.default.isTableOfContents), onClick: tableOfContentsButtonClickHandler, children: "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435" }), (0, jsx_runtime_1.jsx)("button", { className: getClassNames(Footer_scss_1.default.isAchievementsProgress), onClick: achievementsProgressClickHandler, children: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439" }), (0, jsx_runtime_1.jsx)("button", { className: getClassNames(Footer_scss_1.default.isClose), onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map