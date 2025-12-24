import type { HTMLAttributes, PropsWithChildren } from 'react';

import * as styles from './Header.scss';

export type HeaderProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Header = ({ children, ...etc }: HeaderProps) => {
  return (
    <div className={styles.Header} {...etc}>
      {children}
    </div>
  );
};
