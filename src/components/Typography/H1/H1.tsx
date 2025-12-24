import type { HTMLAttributes, PropsWithChildren } from 'react';

import * as styles from './H1.scss';

export type H1Props = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const H1 = ({ children, ...etc }: H1Props) => {
  return (
    <div className={styles.H1} {...etc}>
      {children}
    </div>
  );
};
