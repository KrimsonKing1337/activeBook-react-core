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
exports.Narrative = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hammerjs_1 = __importDefault(require("hammerjs"));
var store_1 = require("../../../../store");
var config_1 = require("../../../../store/config");
var font_1 = require("../../../../store/effects/font");
var goToPage_1 = require("../../../../utils/control/goToPage");
var Narrative_scss_1 = __importDefault(require("./Narrative.scss"));
var Narrative = function (_a) {
    var children = _a.children;
    var fontSize = (0, store_1.useSelector)(config_1.configSelectors.fontSize);
    var lineHeight = (0, store_1.useSelector)(config_1.configSelectors.lineHeight);
    var fontColor = (0, store_1.useSelector)(font_1.fontEffectsSelectors.color);
    var fontStyle = (0, store_1.useSelector)(font_1.fontEffectsSelectors.style);
    var narrativeStyle = {
        fontSize: "".concat(fontSize, "%"),
        color: fontColor,
    };
    var textStyle = __assign({ lineHeight: "".concat(lineHeight, "%") }, fontStyle);
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    (0, react_1.useEffect)(function () {
        if (!ref.current) {
            return;
        }
        var hammertime = new hammerjs_1.default(ref.current, { domEvents: true });
        hammertime.get('swipe').set({
            direction: hammerjs_1.default.DIRECTION_HORIZONTAL,
            threshold: 50,
        });
        hammertime.on('swipe', function (e) {
            var direction = e.direction;
            var isNext = direction === hammerjs_1.default.DIRECTION_LEFT;
            isNext ? (0, goToPage_1.goNextPage)() : (0, goToPage_1.goPrevPage)();
        });
        return function () {
            hammertime.off('swipe');
            hammertime.destroy();
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: Narrative_scss_1.default.narrative, style: narrativeStyle, tabIndex: 0, children: (0, jsx_runtime_1.jsx)("div", { className: Narrative_scss_1.default.text, style: textStyle, children: children }) }));
};
exports.Narrative = Narrative;
//# sourceMappingURL=Narrative.js.map