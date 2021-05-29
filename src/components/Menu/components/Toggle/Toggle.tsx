import React from 'react';

import classNames from 'classnames';

import { Label } from '../Label';

import styles from './Toggle.scss';

export type TogglePropsType = {
  label: string;
};

const itemActiveClassNames = classNames([
  styles.item,
  styles.isActive,
]);

export const Toggle = ({ label }: TogglePropsType) => {
  return (
    <div className={styles.toggle}>
      <Label label={label} />

      <div className={styles.itemsWrapper}>
        <div className={itemActiveClassNames}>
          Вкл
        </div>

        <div className={styles.item}>
          Выкл
        </div>
      </div>
    </div>
  );
};
