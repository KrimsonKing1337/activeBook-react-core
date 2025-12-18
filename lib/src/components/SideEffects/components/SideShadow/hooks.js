import { useEffect } from 'react';
import { useSelector } from 'store';
import { sideShadowEffectSelectors } from 'store/effects/side/shadow';
import { setCssVariable } from 'utils/styles/setCssVariable';
export function useColorPolice(sideShadowRef) {
    var color = useSelector(sideShadowEffectSelectors.color);
    useEffect(function () {
        var sideShadowElement = sideShadowRef.current;
        var shadowColor = 'red';
        var changeTextShadowColor = function () {
            shadowColor = shadowColor === 'red' ? 'blue' : 'red';
            setCssVariable('--text-shadow-color', shadowColor);
        };
        if (color === 'police') {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.addEventListener('animationiteration', changeTextShadowColor);
        }
        return function () {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.removeEventListener('animationiteration', changeTextShadowColor);
        };
    }, [color]);
}
export function useColorCarameldansen(sideShadowRef) {
    var color = useSelector(sideShadowEffectSelectors.color);
    var colors = [
        '#FF0000',
        '#FF7F00',
        '#FFFF00',
        '#00FF00',
        '#0000FF',
        '#4B0082',
        '#9400D3',
    ];
    useEffect(function () {
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
            setCssVariable('--text-shadow-color', shadowColor);
        };
        if (color === 'caramel') {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.addEventListener('animationiteration', changeTextShadowColor);
        }
        return function () {
            sideShadowElement === null || sideShadowElement === void 0 ? void 0 : sideShadowElement.removeEventListener('animationiteration', changeTextShadowColor);
        };
    }, [color]);
}
export function useResetNameOfTextShadowAnimationCss() {
    useEffect(function () {
        /**
         * css-modules косячно отрабатывает названия анимаций, определённых через @kayframes.
         * на выходе получается что-то типа:
         * --text-shadow-animation: reset__blink__iO1029;
         * из-за чего анимация ломается, т.к. завязана на переменную (animation: var(--text-shadow-animation)).
         * как изящно решить не придумал, поэтому устанавливаю нужное значение при инициализации компонента
         */
        setCssVariable('--text-shadow-animation', 'blink');
    }, []);
}
//# sourceMappingURL=hooks.js.map