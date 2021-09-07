import React from 'react';

import styles from './Item.scss';

type ItemProps = {
  children: React.ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return (
    <div className={styles.item}>
      {children}
    </div>
  );
};
