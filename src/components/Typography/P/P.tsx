import type { PropsWithChildren } from 'react';

import * as styles from './P.scss';

export const P = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.P}>
      {children}
    </div>
  );
};
