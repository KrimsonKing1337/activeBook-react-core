import type { HTMLAttributes, PropsWithChildren } from 'react';

import * as styles from './H2.scss';

export type H2Props = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const H2 = ({ children, ...etc }: H2Props) => {
  return (
    <div className={styles.H2} {...etc}>
      {children}
    </div>
  );
};
