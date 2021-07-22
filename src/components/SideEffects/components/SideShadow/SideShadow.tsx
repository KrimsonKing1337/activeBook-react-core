import React, { useEffect, useRef } from 'react';

import { setCssVariable } from 'utils/setCssVariable';

import styles from './SideShadow.scss';

export const SideShadow = () => {
  const sideShadow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sideShadowElement = sideShadow.current;

    let shadowColor = 'red';

    const changeTextShadowColor = () => {
      shadowColor = shadowColor === 'red' ? 'blue' : 'red';

      setCssVariable('--text-shadow-color', shadowColor);
    };

    if (sideShadowElement) {
      sideShadowElement.addEventListener('animationiteration', changeTextShadowColor);
    }

    return () => {
      if (sideShadowElement) {
        sideShadowElement.removeEventListener('animationiteration', changeTextShadowColor);
      }
    };
  }, []);

  return (
    <div ref={sideShadow} className={styles.sideShadow} />
  );
};
