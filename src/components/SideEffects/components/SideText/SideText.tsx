import React from 'react';

import styles from './SideText.scss';

// todo: проверять через TS, чтобы в children было 2 элемента
export type SideTextPropsType = {
  children: React.ReactNode
};

export const SideText = ({ children }: SideTextPropsType) => {
  const childrenAsArray = React.Children.toArray(children);

  return (
    <div className={styles.sideTextScrollWrapper}>
      <div className={styles.sideTextScrollLeftWrapper}>
        <div className={styles.sideTextScrollLeft}>
          <div className={styles.sideTextScrollContent}>
            { childrenAsArray[0] }
          </div>
        </div>
      </div>

      <div className={styles.sideTextScrollRightWrapper}>
        <div className={styles.sideTextScrollRight}>
          <div className={styles.sideTextScrollContent}>
            { childrenAsArray[1] }
          </div>
        </div>
      </div>
    </div>
  );
}
