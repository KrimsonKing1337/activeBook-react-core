import type { HTMLAttributes, PropsWithChildren } from 'react';

import * as styles from './P.scss';

export type PProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const P = ({ children, ...etc }: PProps) => {
  return (
    <div className={styles.P} {...etc}>
      {children}
    </div>
  );
};
