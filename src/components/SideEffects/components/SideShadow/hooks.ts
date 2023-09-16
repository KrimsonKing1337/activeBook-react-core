import { RefObject, useEffect } from 'react';

import { useSelector } from 'store';
import { sideShadowEffectSelectors } from 'store/effects/side/shadow';

import { setCssVariable } from 'utils/styles/setCssVariable';

export function useColorPolice(sideShadowRef: RefObject<HTMLDivElement>) {
  const color = useSelector(sideShadowEffectSelectors.color);

  useEffect(() => {
    const sideShadowElement = sideShadowRef.current;

    let shadowColor = 'red';

    const changeTextShadowColor = () => {
      shadowColor = shadowColor === 'red' ? 'blue' : 'red';

      setCssVariable('--text-shadow-color', shadowColor);
    };

    if (color === 'police') {
      sideShadowElement?.addEventListener('animationiteration', changeTextShadowColor);
    }

    return () => {
      sideShadowElement?.removeEventListener('animationiteration', changeTextShadowColor);
    };
  }, [color]);
}

export function useColorCarameldansen(sideShadowRef: RefObject<HTMLDivElement>) {
  const color = useSelector(sideShadowEffectSelectors.color);

  const colors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#9400D3',
  ];

  useEffect(() => {
    const sideShadowElement = sideShadowRef.current;

    let index = 0;

    let shadowColor = colors[index];

    const changeTextShadowColor = () => {
      if (colors[index + 1]) {
        index = index + 1;

        shadowColor = colors[index];
      } else {
        index = 0;

        shadowColor = colors[index];
      }

      setCssVariable('--text-shadow-color', shadowColor);
    };

    if (color === 'caramel') {
      sideShadowElement?.addEventListener('animationiteration', changeTextShadowColor);
    }

    return () => {
      sideShadowElement?.removeEventListener('animationiteration', changeTextShadowColor);
    };
  }, [color]);
}

export function useResetNameOfTextShadowAnimationCss() {
  useEffect(() => {
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
