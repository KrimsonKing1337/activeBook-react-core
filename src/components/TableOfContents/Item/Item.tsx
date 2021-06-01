import React from 'react';

import styles from './Item.scss';

export type ItemPropsType = {
  title: string;
  subtitle: string;
  pageNumber: string;
};

export const Item = ({ title, subtitle, pageNumber }: ItemPropsType) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>
        { title }
      </div>

      <div className={styles.subtitle}>
        { subtitle }
      </div>

      <div className={styles.pageNumber}>
        { pageNumber }
      </div>
    </div>
  );
};
