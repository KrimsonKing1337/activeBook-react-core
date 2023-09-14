"use strict";
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
var goToPage_1 = require("../../../../utils/control/goToPage");
var Narrative_scss_1 = __importDefault(require("./Narrative.scss"));
var Narrative = function (_a) {
    var children = _a.children;
    var fontSize = (0, store_1.useSelector)(config_1.configSelectors.fontSize);
    var lineHeight = (0, store_1.useSelector)(config_1.configSelectors.lineHeight);
    var narrativeStyle = { fontSize: "".concat(fontSize, "%") };
    var textStyle = { lineHeight: "".concat(lineHeight, "%") };
    var narrativeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
        (_a = narrativeRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    (0, react_1.useEffect)(function () {
        if (!narrativeRef.current) {
            return;
        }
        var hammertime = new hammerjs_1.default(narrativeRef.current, { domEvents: true });
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
    return ((0, jsx_runtime_1.jsx)("div", { ref: narrativeRef, className: Narrative_scss_1.default.narrative, style: narrativeStyle, tabIndex: 0, children: (0, jsx_runtime_1.jsx)("div", { className: Narrative_scss_1.default.text, style: textStyle, children: children }) }));
};
exports.Narrative = Narrative;
//# sourceMappingURL=Narrative.js.map