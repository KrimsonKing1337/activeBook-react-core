import type { PropsWithChildren } from 'react';

import * as styles from './H1.scss';

export const H1 = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.H1}>
      {children}
    </div>
  );
};
