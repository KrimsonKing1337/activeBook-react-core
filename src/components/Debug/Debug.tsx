import { PropsWithChildren } from 'react';

import * as styles from './Debug.scss';

export const Debug = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.Debug}>
      {children}
    </div>
  );
};
