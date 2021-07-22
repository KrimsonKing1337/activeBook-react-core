import React, { useState } from 'react';

import classNames from 'classnames';

import { Label } from '../Label';

import styles from './Toggle.scss';

type Func = () => void;

export type TogglePropsType = {
  label: string;
  isActiveDefault?: boolean;
  isActive?: boolean | undefined;
  onClickOn: Func;
  onClickOff: Func;
};

export const Toggle = ({ label, isActiveDefault = true, isActive, onClickOn, onClickOff }: TogglePropsType) => {
  const [uncontrolledIsActive, setUncontrolledIsActive] = useState(isActiveDefault);

  const buttonClickHandler = (cb: Func) => {
    if (isActive === undefined) {
      setUncontrolledIsActive(!uncontrolledIsActive);
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
