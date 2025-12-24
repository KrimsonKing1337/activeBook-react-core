import type { PropsWithChildren } from 'react';

import * as styles from './H2.scss';

export const H2 = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.H2}>
      {children}
    </div>
  );
};
