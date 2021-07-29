import React from 'react';

import styles from './Debug.scss';

export type DebugProps = {
  children: React.ReactNode;
};

export const Debug = ({ children }: DebugProps) => {
  return (
    <div className={styles.debug}>
      {children}
    </div>
  );
};
