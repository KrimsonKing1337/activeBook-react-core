"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segments = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var components_1 = require("../../..");
var vibration_1 = require("../../../../hooks/effects/vibration");
var Segments_scss_1 = __importDefault(require("./Segments.scss"));
var Segments = function () {
    var _a, _b;
    var _c = (0, vibration_1.useVibration)(), vibrationOn = _c.vibrationOn, vibrationOff = _c.vibrationOff;
    var _d = (0, react_1.useState)(false), isSegment1Active = _d[0], setIsSegment1Active = _d[1];
    var _e = (0, react_1.useState)(false), isSegment2Active = _e[0], setIsSegment2Active = _e[1];
    var segment1EnterHandler = function () {
        vibrationOn(1000);
        setIsSegment1Active(true);
    };
    var segment1ExitHandler = function () {
        vibrationOff();
        setIsSegment1Active(false);
    };
    var segment2EnterHandler = function () {
        vibrationOn(1000);
        setIsSegment2Active(true);
    };
    var segment2ExitHandler = function () {
        vibrationOff();
        setIsSegment2Active(false);
    };
    var segment1ContentClassNames = (0, classnames_1.default)((_a = {},
        _a[Segments_scss_1.default.SegmentContent] = true,
        _a[Segments_scss_1.default.isActive] = isSegment1Active,
        _a));
    var segment2ContentClassNames = (0, classnames_1.default)((_b = {},
        _b[Segments_scss_1.default.SegmentContent] = true,
        _b[Segments_scss_1.default.isActive] = isSegment2Active,
        _b));
    return ((0, jsx_runtime_1.jsxs)("div", { "data-welcome-tour-id": "segments", children: [(0, jsx_runtime_1.jsxs)(components_1.Segment, { onEnter: segment1EnterHandler, onExit: segment1ExitHandler, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F" }), (0, jsx_runtime_1.jsx)("p", { className: segment1ContentClassNames, children: "\u041C\u0435\u043D\u044F \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u043E\u0442 \u0441\u0435\u0433\u043C\u0435\u043D\u0442 \u0430\u043A\u0442\u0438\u0432\u0435\u043D" })] }), (0, jsx_runtime_1.jsxs)(components_1.Segment, { onEnter: segment2EnterHandler, onExit: segment2ExitHandler, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u0418 \u043D\u0430 \u043C\u0435\u043D\u044F \u043D\u0430\u0436\u043C\u0438!" }), (0, jsx_runtime_1.jsx)("p", { className: segment2ContentClassNames, children: "\u0412\u043D\u0443\u0442\u0440\u0438 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0442\u0435\u043A\u0441\u0442, \u044D\u0444\u0444\u0435\u043A\u0442\u044B \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435!" })] })] }));
};
exports.Segments = Segments;
//# sourceMappingURL=Segments.js.map