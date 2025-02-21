import { useEffect, useRef } from 'react';

import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';

import styles from './Shadow.scss';

export const Shadow = () => {
  const ref = useRef<HTMLDivElement>(null);

  const shadow = useSelector(backgroundEffectSelectors.shadow);

  useEffect(() => {
    if (shadow && ref.current) {
      ref.current.setAttribute('style', shadow.css as string);
    }
  }, [shadow]);

  if (!shadow) {
    return null;
  }

  const { color } = shadow;

  return (
    <div ref={ref} className={styles.shadow} style={{ backgroundColor: color }} />
  );
};
