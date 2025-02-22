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
exports.Dots = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("../../../../utils/effects/achievements/utils");
var achievements_1 = require("../../../../utils/effects/achievements");
var achievements_2 = require("../../../../utils/localStorage/achievements");
var store_1 = require("../../../../store");
var common_1 = require("../../../../store/effects/common");
var utils_2 = require("./utils");
var Dots_scss_1 = __importDefault(require("./Dots.scss"));
var Dots = function () {
    var dotsIsActive = (0, store_1.useSelector)(common_1.effectsSelectors.dotsIsActive);
    var _a = (0, react_1.useState)(utils_2.orderDefaultState), order = _a[0], setOrder = _a[1];
    (0, react_1.useEffect)(function () {
        var wasFound = achievements_2.achievements.get(utils_1.Flags.superEasterEggFound);
        if (wasFound) {
            return;
        }
        var setValue = function (index) {
            var _a;
            var firstUnclicked = Object.values(order).indexOf(0);
            var keyStr = Object.keys(order)[firstUnclicked];
            var key = parseInt(keyStr, 10);
            var newValues = __assign(__assign({}, order), (_a = {}, _a[key] = index, _a));
            setOrder(newValues);
        };
        var listener = function (e) {
            var elementsUnderCursor = document.elementsFromPoint(e.clientX, e.clientY);
            if (!elementsUnderCursor) {
                return;
            }
            var dotElement = elementsUnderCursor.find(function (elementCur) {
                if (elementCur.parentElement) {
                    var str = elementCur.parentElement.classList.value;
                    if (str.includes('dotsWrapper')) {
                        return elementCur;
                    }
                }
                return false;
            });
            if (!dotElement) {
                return;
            }
            var computedStyles = window.getComputedStyle(dotElement);
            var styles = {
                top: computedStyles.top,
                right: computedStyles.right,
                bottom: computedStyles.bottom,
                left: computedStyles.left,
            };
            var placeInLine = (0, utils_2.getPlaceInLineByLocationStyles)(styles);
            setValue(placeInLine);
        };
        document.addEventListener('click', listener, { passive: true });
        return function () {
            document.removeEventListener('click', listener);
        };
    }, [order, setOrder]);
    (0, react_1.useEffect)(function () {
        var orderValues = Object.values(order);
        var allClicked = orderValues.indexOf(0) === -1;
        if (!allClicked) {
            return;
        }
        var orderKeys = Object.keys(order);
        for (var i = 0; i < orderKeys.length; i++) {
            var keyCur = orderKeys[i];
            var valueCur = orderValues[i].toString();
            if (keyCur !== valueCur) {
                setOrder(utils_2.orderDefaultState);
                return;
            }
        }
        (0, achievements_1.play)({
            id: utils_1.Flags.superEasterEggFound,
            text: 'Суперсекрет! Не могу поверить, что ты это нашёл/нашла!',
            type: 'platinum',
        });
        return function () {
            setOrder(utils_2.orderDefaultState);
        };
    }, [order]);
    if (!dotsIsActive) {
        return null;
    }
    var dots = (0, utils_2.createDotsAsArray)();
    return ((0, jsx_runtime_1.jsx)("div", { className: Dots_scss_1.default.dotsWrapper, children: dots.map(function (key) { return ((0, jsx_runtime_1.jsx)("div", { className: Dots_scss_1.default.dot }, key)); }) }));
};
exports.Dots = Dots;
//# sourceMappingURL=Dots.js.map