import React, { useState } from 'react';

import classNames from 'classnames';

import { Label } from 'components/Label';

import styles from './Toggle.scss';

type Func = () => void;

export type ToggleProps = {
  label: string;
  isActiveDefault?: boolean;
  isActive?: boolean | undefined;
  onClickOn: Func;
  onClickOff: Func;
};

export const Toggle = ({ label, isActiveDefault = true, isActive, onClickOn, onClickOff }: ToggleProps) => {
  const [uncontrolledIsActive, setUncontrolledIsActive] = useState(isActiveDefault);

  const buttonClickHandler = (value: boolean, cb: Func) => {
    if (isActive === undefined) {
      if (value !== uncontrolledIsActive) {
        setUncontrolledIsActive(!uncontrolledIsActive);
      }
    }

    cb();
  };

  const trueIsActive = isActive === undefined ? uncontrolledIsActive : isActive;

  const itemOnClassNames = classNames({
    [styles.item]: true,
    [styles.isActive]: trueIsActive,
  });

  const itemOffClassNames = classNames({
    [styles.item]: true,
    [styles.isActive]: !trueIsActive,
  });

  return (
    <div className={styles.toggle}>
      <Label label={label} />

      <div className={styles.itemsWrapper}>
        <div className={itemOnClassNames} onClick={() => buttonClickHandler(true, onClickOn)}>
          Вкл
        </div>

        <div className={itemOffClassNames} onClick={() => buttonClickHandler(false, onClickOff)}>
          Выкл
        </div>
      </div>
    </div>
  );
};
