import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';

import styles from './Shadow.scss';

export const Shadow = () => {
  const shadow = useSelector(backgroundEffectsSelectors.shadow);

  if (!shadow) {
    return null;
  }

  return (
    <div style={shadow.style} className={styles.shadow} />
  );
};
