"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vibration = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../../../store");
var config_1 = require("../../../../store/config");
var main_1 = require("../../../../store/main");
var Toggle_1 = require("../../../Toggle");
var Spoiler_1 = require("../../../Spoiler");
var utils_1 = require("../../../Menu/utils");
var vibration_1 = require("../../../../utils/effects/vibration");
var Vibration_scss_1 = __importDefault(require("./Vibration.scss"));
var Vibration = function () {
    var dispatch = (0, store_1.useDispatch)();
    var vibrationState = (0, store_1.useSelector)(config_1.configSelectors.vibration);
    var isVibrationAvailable = (0, store_1.useSelector)(main_1.mainSelectors.isVibrationAvailable);
    var toggleClickHandler = function (value) {
        dispatch(config_1.configActions.setVibration(value));
        (0, utils_1.playAchievement)();
        if (value && isVibrationAvailable) {
            (0, vibration_1.on)(300);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Vibration_scss_1.default.vibration, children: [(0, jsx_runtime_1.jsx)(Toggle_1.Toggle, { label: "\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F (\u0442\u0430\u043C, \u0433\u0434\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E)", isActiveDefault: vibrationState, withoutBorder: true, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }), (0, jsx_runtime_1.jsx)(Spoiler_1.Spoiler, { label: "\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044F?", children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044E, \u0438 \u0447\u0442\u043E \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0451\u043D \u0431\u0435\u0437\u0437\u0432\u0443\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C. \u0427\u0430\u0441\u0442\u043E \u043E\u043D \u043D\u0435 \u0434\u0430\u0451\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u0438 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C" })] }));
};
exports.Vibration = Vibration;
//# sourceMappingURL=Vibration.js.map