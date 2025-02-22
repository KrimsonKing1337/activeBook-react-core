import type { PropsWithChildren } from 'react';

import styles from './Wrapper.scss';

export type WrapperProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Wrapper = ({ children, style }: WrapperProps) => {
  return (
    <div style={style} className={styles.wrapper}>
      {children}
    </div>
  );
};
