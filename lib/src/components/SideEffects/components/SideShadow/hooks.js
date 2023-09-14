"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResetNameOfTextShadowAnimationCss = exports.useColorCarameldansen = exports.useColorPolice = void 0;
var react_1 = require("react");
var store_1 = require("../../../../store");
var shadow_1 = require("../../../../store/effects/side/shadow");
var setCssVariable_1 = require("../../../../utils/styles/setCssVariable");
function useColorPolice(sideShadowRef) {
    var color = (0, store_1.useSelector)(shadow_1.sideShadowEffectSelectors.color);
    (0, react_1.useEffect)(function () {
        var sideShadowElement = sideShadowRef.current;
        var shadowColor = 'red';
        var changeTextShadowColor = function () {
            shadowColor = shadowColor === 'red' ? 'blue' : 'red';
            (0, setCssVariable_1.setCssVariable)('--text-shadow-color', shadowColor);
        };
        if (color === 'police') {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.addEventListener('animationiteration', changeTextShadowColor);
        }
        return function () {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.removeEventListener('animationiteration', changeTextShadowColor);
        };
    }, [color]);
}
exports.useColorPolice = useColorPolice;
function useColorCarameldansen(sideShadowRef) {
    var color = (0, store_1.useSelector)(shadow_1.sideShadowEffectSelectors.color);
    var colors = [
        '#FF0000',
        '#FF7F00',
        '#FFFF00',
        '#00FF00',
        '#0000FF',
        '#4B0082',
        '#9400D3',
    ];
    (0, react_1.useEffect)(function () {
        var sideShadowElement = sideShadowRef.current;
        var index = 0;
        var shadowColor = colors[index];
        var changeTextShadowColor = function () {
            if (colors[index + 1]) {
                index = index + 1;
                shadowColor = colors[index];
            }
            else {
                index = 0;
                shadowColor = colors[index];
            }
            (0, setCssVariable_1.setCssVariable)('--text-shadow-color', shadowColor);
        };
        if (color === 'caramel') {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.addEventListener('animationiteration', changeTextShadowColor);
        }
        return function () {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.removeEventListener('animationiteration', changeTextShadowColor);
        };
    }, [color]);
}
exports.useColorCarameldansen = useColorCarameldansen;
function useResetNameOfTextShadowAnimationCss() {
    (0, react_1.useEffect)(function () {
        /**
         * css-modules косячно отрабатывает названия анимаций, определённых через @kayframes.
         * на выходе получается что-то типа:
         * --text-shadow-animation: reset__blink__iO1029;
         * из-за чего анимация ломается, т.к. завязана на переменную (animation: var(--text-shadow-animation)).
         * как изящно решить не придумал, поэтому устанавливаю нужное значение при инициализации компонента
         */
        (0, setCssVariable_1.setCssVariable)('--text-shadow-animation', 'blink');
    }, []);
}
exports.useResetNameOfTextShadowAnimationCss = useResetNameOfTextShadowAnimationCss;
//# sourceMappingURL=hooks.js.map