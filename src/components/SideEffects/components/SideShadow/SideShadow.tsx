import { useRef } from 'react';

import { useColorCarameldansen, useColorPolice, useResetNameOfTextShadowAnimationCss } from './hooks';

import styles from './SideShadow.scss';

export const SideShadow = () => {
  const sideShadowRef = useRef<HTMLDivElement>(null);

  useResetNameOfTextShadowAnimationCss();
  useColorPolice(sideShadowRef);
  useColorCarameldansen(sideShadowRef);

  return (
    <div ref={sideShadowRef} className={styles.sideShadow} />
  );
};
