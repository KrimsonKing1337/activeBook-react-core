import React, { PropsWithChildren } from 'react';

import styles from './SideText.scss';

export const SideText = ({ children }: PropsWithChildren<unknown>) => {
  const childrenAsArray = React.Children.toArray(children);

  if (childrenAsArray.length !== 2) {
    throw new Error('There are must be two children in props!');
  }

  return (
    <div className={styles.sideTextScrollWrapper}>
      <div className={styles.sideTextScrollLeftWrapper}>
        <div className={styles.sideTextScrollLeft}>
          <div className={styles.sideTextScrollContent}>
            {childrenAsArray[0]}
          </div>
        </div>
      </div>

      <div className={styles.sideTextScrollRightWrapper}>
        <div className={styles.sideTextScrollRight}>
          <div className={styles.sideTextScrollContent}>
            {childrenAsArray[1]}
          </div>
        </div>
      </div>
    </div>
  );
};
