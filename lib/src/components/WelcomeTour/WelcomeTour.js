"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeTour = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var components_1 = require("..");
var vibration_1 = require("../../hooks/effects/vibration");
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
    var _b = (0, vibration_1.useVibration)(), vibrationOn = _b.vibrationOn, vibrationOff = _b.vibrationOff;
    var _c = (0, react_1.useState)(0), idIndex = _c[0], setIdIndex = _c[1];
    var _d = (0, react_1.useState)('Далее'), nextButtonLabel = _d[0], setNextButtonLabel = _d[1];
    (0, react_1.useEffect)(function () {
        if (!isActive) {
            (0, utils_1.removeHighLight)();
            return;
        }
        (0, utils_1.setHighLight)('action');
    }, [isActive]);
    var actionClickHandler = function () {
        vibrationOn(1000);
        react_toastify_1.toast.success('Отлично!');
    };
    var segment1EnterHandler = function () {
        vibrationOn(1000);
        react_toastify_1.toast.success('Так держать!');
    };
    var segment2EnterHandler = function () {
        vibrationOn(1000);
        react_toastify_1.toast.success('Супер!');
    };
    var segmentExitHandler = function () {
        vibrationOff();
    };
    var nextButtonClickHandler = function () {
        (0, utils_1.removeHighLight)();
        if (idIndex === elementsIdsArray.length - 2) {
            setNextButtonLabel('Закончить знакомство');
        }
        if (idIndex === elementsIdsArray.length - 1) {
            setIsActive(false);
            localStorage.setItem(utils_1.localStorageId, 'true');
            return;
        }
        var newIndex = idIndex + 1;
        var newId = elementsIdsArray[newIndex];
        setIdIndex(newIndex);
        (0, utils_1.setHighLight)(newId);
    };
    var modalCloseHandler = function () {
        setIsModalActive(false);
        setIsActive(true);
    };
    var elementId = elementsIdsArray[idIndex];
    var _e = (0, utils_1.getWelcomeTourTextById)(elementId), header = _e.header, desc = _e.desc;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.ModalDialog, { isOpen: isModalActive, confirmButtonLabel: "\u0425\u043E\u0440\u043E\u0448\u043E", canFullScreen: false, showCancelButton: false, cantCloseIn: 2000, onConfirm: modalCloseHandler, children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("header", { children: "\u041F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u043D\u0430\u0447\u043D\u0451\u043C..." }), (0, jsx_runtime_1.jsx)("article", { children: (0, jsx_runtime_1.jsx)("p", { children: "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043A\u043D\u0438\u0433\u0438" }) })] }) }), isActive && ((0, jsx_runtime_1.jsxs)("div", { className: WelcomeTour_scss_1.default.Wrapper, children: [(0, jsx_runtime_1.jsxs)("div", { className: WelcomeTour_scss_1.default.Card, children: [(0, jsx_runtime_1.jsx)("p", { className: WelcomeTour_scss_1.default.CardHeader, children: header }), (0, jsx_runtime_1.jsx)("p", { children: desc }), (0, jsx_runtime_1.jsx)(components_1.Button, { type: "success", className: WelcomeTour_scss_1.default.CardButton, onClick: nextButtonClickHandler, children: nextButtonLabel })] }), (0, jsx_runtime_1.jsx)("div", { "data-welcome-tour-id": "action", className: WelcomeTour_scss_1.default.ActionWrapper, children: (0, jsx_runtime_1.jsx)(components_1.Action, { fullWidth: true, onClick: actionClickHandler, children: "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442" }) }), (0, jsx_runtime_1.jsxs)("div", { "data-welcome-tour-id": "segments", children: [(0, jsx_runtime_1.jsx)(components_1.Segment, { onEnter: segment1EnterHandler, onExit: segmentExitHandler, children: (0, jsx_runtime_1.jsx)("p", { children: "\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F" }) }), (0, jsx_runtime_1.jsx)(components_1.Segment, { onEnter: segment2EnterHandler, onExit: segmentExitHandler, children: (0, jsx_runtime_1.jsx)("p", { children: "\u0418 \u043D\u0430 \u043C\u0435\u043D\u044F \u043D\u0430\u0436\u043C\u0438!" }) })] })] }))] }));
};
exports.WelcomeTour = WelcomeTour;
//# sourceMappingURL=WelcomeTour.js.map