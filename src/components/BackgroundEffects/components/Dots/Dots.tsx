import React from 'react';

import styles from './Dots.scss';

export const Dots = () => {
  return (
    <div className={styles.dotsWrapper}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};
