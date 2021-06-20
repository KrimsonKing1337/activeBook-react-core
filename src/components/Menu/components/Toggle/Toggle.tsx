import React, { useState } from 'react';

import classNames from 'classnames';

import { Label } from '../Label';

import styles from './Toggle.scss';

type Func = () => void;

export type TogglePropsType = {
  label: string;
  isActiveDefault?: boolean;
  onClickOn: Func;
  onClickOff: Func;
};

export const Toggle = ({ label, isActiveDefault = true, onClickOn, onClickOff }: TogglePropsType) => {
  const [isActive, setIsActive] = useState(isActiveDefault);

  const buttonClickHandler = (cb: Func) => {
    setIsActive(!isActive);

    cb();
  }

  const itemOnClassNames = classNames({
    [styles.item]: true,
    [styles.isActive]: isActive,
  });

  const itemOffClassNames = classNames({
    [styles.item]: true,
    [styles.isActive]: !isActive,
  });

  return (
    <div className={styles.toggle}>
      <Label label={label} />

      <div className={styles.itemsWrapper}>
        <div className={itemOnClassNames} onClick={() => buttonClickHandler(onClickOn)}>
          Вкл
        </div>

        <div className={itemOffClassNames} onClick={() => buttonClickHandler(onClickOff)}>
          Выкл
        </div>
      </div>
    </div>
  );
};
