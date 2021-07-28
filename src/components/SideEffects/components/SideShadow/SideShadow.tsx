import React, { useEffect, useRef } from 'react';

import { setCssVariable } from 'utils/setCssVariable';

import styles from './SideShadow.scss';

export const SideShadow = () => {
  const sideShadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sideShadowElement = sideShadowRef.current;

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
    <div ref={sideShadowRef} className={styles.sideShadow} />
  );
};
