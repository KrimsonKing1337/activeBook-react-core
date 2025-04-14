"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeTour = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_toastify_1 = require("react-toastify");
var store_1 = require("../../../../store");
var config_1 = require("../../../../store/config");
var Toggle_1 = require("../../../Toggle");
var WelcomeTour_scss_1 = __importDefault(require("./WelcomeTour.scss"));
var WelcomeTour = function () {
    var dispatch = (0, store_1.useDispatch)();
    var isActive = (0, store_1.useSelector)(config_1.configSelectors.welcomeTour);
    var toggleClickHandler = function (value) {
        dispatch(config_1.configActions.setWelcomeTour(value));
        if (value) {
            react_toastify_1.toast.success('Обучение вновь доступно на заглавной странице. Нажмите на кнопку "читать"');
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: WelcomeTour_scss_1.default.welcomeTour, children: (0, jsx_runtime_1.jsx)(Toggle_1.Toggle, { label: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435", isActiveDefault: isActive, withoutBorder: true, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }) }));
};
exports.WelcomeTour = WelcomeTour;
//# sourceMappingURL=WelcomeTour.js.map