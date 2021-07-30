import React from 'react';

import styles from './EasterEgg.scss';

export type EasterEggProps = {
  [key: string]: any;
  children: React.ReactNode;
};

export const EasterEgg = ({ children, ...rest }: EasterEggProps) => {
  return (
    <div className={styles.easterEgg} {...rest}>
      {children}
    </div>
  );
};
