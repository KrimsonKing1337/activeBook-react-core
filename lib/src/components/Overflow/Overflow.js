"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overflow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../store");
var main_1 = require("../../store/main");
var utils_1 = require("../PageWrapper/components/Narrative/utils");
var Overflow_scss_1 = __importDefault(require("./Overflow.scss"));
var Overflow = function (_a) {
    var _b;
    var children = _a.children, isOpen = _a.isOpen;
    var dispatch = (0, store_1.useDispatch)();
    var overflowRef = (0, react_1.useRef)(null);
    // закрываем по Esc активный Overflow в данный момент
    (0, react_1.useEffect)(function () {
        var keypressEscHandler = function (e) {
            var key = e.key;
            if (key === 'Escape') {
                dispatch(main_1.mainActions.setMenuActiveState(null));
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', keypressEscHandler);
        }
        return function () {
            document.removeEventListener('keydown', keypressEscHandler);
        };
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (isOpen) {
            // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
            (_a = overflowRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            // возвращаем фокус на текст
            var narrativeElement = (0, utils_1.getNarrativeElement)();
            narrativeElement === null || narrativeElement === void 0 ? void 0 : narrativeElement.focus();
        }
    }, [isOpen]);
    var overflowClassNames = (0, classnames_1.default)((_b = {},
        _b[Overflow_scss_1.default.overflow] = true,
        _b[Overflow_scss_1.default.isOpen] = isOpen,
        _b));
    return ((0, jsx_runtime_1.jsx)("div", { ref: overflowRef, className: overflowClassNames, tabIndex: 0, children: children }));
};
exports.Overflow = Overflow;
//# sourceMappingURL=Overflow.js.map