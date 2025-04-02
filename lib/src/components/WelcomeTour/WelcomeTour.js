"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeTour = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var store_1 = require("../../store");
var config_1 = require("../../store/config");
var vibration_1 = require("../../hooks/effects/vibration");
var components_1 = require("..");
var components_2 = require("./components");
var utils_1 = require("./utils");
var WelcomeTour_scss_1 = __importDefault(require("./WelcomeTour.scss"));
var elementsIdsArray = [
    'action',
    'segments',
    'bookmarks',
    'navigation',
    'font',
    'config',
];
var WelcomeTour = function (_a) {
    var isActive = _a.isActive, setIsActive = _a.setIsActive, isModalActive = _a.isModalActive, setIsModalActive = _a.setIsModalActive;
    var dispatch = (0, store_1.useDispatch)();
    var vibrationOn = (0, vibration_1.useVibration)().vibrationOn;
    var _b = (0, react_1.useState)(0), idIndex = _b[0], setIdIndex = _b[1];
    var _c = (0, react_1.useState)('Далее'), nextButtonLabel = _c[0], setNextButtonLabel = _c[1];
    (0, react_1.useEffect)(function () {
        if (!isActive) {
            (0, utils_1.removeHighLight)();
            return;
        }
        (0, utils_1.setHighLight)('action');
    }, [isActive]);
    var actionClickHandler = function () {
        vibrationOn(500);
        react_toastify_1.toast.success('Отлично!');
    };
    var nextButtonClickHandler = function () {
        (0, utils_1.removeHighLight)();
        if (idIndex === elementsIdsArray.length - 2) {
            setNextButtonLabel('Закончить знакомство');
        }
        if (idIndex === elementsIdsArray.length - 1) {
            setIsActive(false);
            dispatch(config_1.configActions.setWelcomeTour(false));
            return;
        }
        var newIndex = idIndex + 1;
        var newId = elementsIdsArray[newIndex];
        setIdIndex(newIndex);
        (0, utils_1.setHighLight)(newId);
    };
    var modalConfirmHandler = function () {
        setIsModalActive(false);
        setIsActive(true);
    };
    var elementId = elementsIdsArray[idIndex];
    var _d = (0, utils_1.getWelcomeTourTextById)(elementId), header = _d.header, desc = _d.desc;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_2.Modal, { isActive: isModalActive, onConfirm: modalConfirmHandler }), isActive && ((0, jsx_runtime_1.jsxs)("div", { className: WelcomeTour_scss_1.default.Wrapper, children: [(0, jsx_runtime_1.jsxs)("div", { className: WelcomeTour_scss_1.default.Card, children: [(0, jsx_runtime_1.jsx)("p", { className: WelcomeTour_scss_1.default.CardHeader, children: header }), (0, jsx_runtime_1.jsx)("p", { children: desc }), (0, jsx_runtime_1.jsx)(components_1.Button, { type: "success", className: WelcomeTour_scss_1.default.CardButton, onClick: nextButtonClickHandler, children: nextButtonLabel })] }), (0, jsx_runtime_1.jsx)("div", { "data-welcome-tour-id": "action", className: WelcomeTour_scss_1.default.ActionWrapper, children: (0, jsx_runtime_1.jsx)(components_1.Action, { fullWidth: true, onClick: actionClickHandler, children: "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442" }) }), (0, jsx_runtime_1.jsx)(components_2.Segments, {})] }))] }));
};
exports.WelcomeTour = WelcomeTour;
//# sourceMappingURL=WelcomeTour.js.map