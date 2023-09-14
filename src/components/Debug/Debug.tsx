import { PropsWithChildren } from 'react';

import styles from './Debug.scss';

export const Debug = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.debug}>
      {children}
    </div>
  );
};
