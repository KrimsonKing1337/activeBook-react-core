import React, { PropsWithChildren } from 'react';

import * as styles from './SideText.scss';

export const SideText = ({ children }: PropsWithChildren<unknown>) => {
  const childrenAsArray = React.Children.toArray(children);

  if (childrenAsArray.length !== 2) {
    throw new Error('There are must be two children in props!');
  }

  return (
    <div className={styles.SideTextScrollWrapper}>
      <div className={styles.SideTextScrollLeftWrapper}>
        <div className={styles.SideTextScrollLeft}>
          <div className={styles.SideTextScrollContent}>
            {childrenAsArray[0]}
          </div>
        </div>
      </div>

      <div className={styles.SideTextScrollRightWrapper}>
        <div className={styles.SideTextScrollRight}>
          <div className={styles.SideTextScrollContent}>
            {childrenAsArray[1]}
          </div>
        </div>
      </div>
    </div>
  );
};
