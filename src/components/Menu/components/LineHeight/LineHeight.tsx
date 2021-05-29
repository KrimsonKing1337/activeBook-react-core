import React from 'react';

import classNames from 'classnames';

import { Label } from '../Label';

import styles from './LineHeight.scss';

function getClassNames(className: string) {
  return classNames([
    styles.item,
    className
  ]);
}

export const LineHeight = () => {
  return (
    <div className={styles.lineHeight}>
      <Label label={'Межстрочный интервал'} />

      <div className={styles.itemsWrapper}>
        <div className={getClassNames(styles.isMinus)}>
          -
        </div>

        <div className={getClassNames(styles.isValue)}>
          100%
        </div>

        <div className={getClassNames(styles.isPlus)}>
          +
        </div>
      </div>
    </div>
  );
};
