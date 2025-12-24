import type { PropsWithChildren } from 'react';

import * as styles from './Header.scss';

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Header}>
      {children}
    </div>
  );
};
