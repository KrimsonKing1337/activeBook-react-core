import type { BackgroundEffectShadowOptions } from 'hooks/effects/background/@types';

import styles from './Shadow.scss';

export type ShadowProps = {
  options: BackgroundEffectShadowOptions;
};

export const Shadow = ({ options }: ShadowProps) => {
  const { style } = options;

  if (!style) {
    return null;
  }

  return (
    <div style={style} className={styles.shadow} />
  );
};
