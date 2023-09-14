import { useEffect, useState } from 'react';

import classNames from 'classnames';

import { Label } from 'components/Label';

import styles from './Toggle.scss';

type Func = () => void;

export type ToggleProps = {
  [name: string]: any;
  label: string;
  isActiveDefault?: boolean;
  isActive?: boolean | undefined;
  withoutBorder?: boolean;
  onClickOn: Func;
  onClickOff: Func;
};

export const Toggle = ({
  label,
  isActiveDefault = true,
  isActive,
  withoutBorder = false,
  onClickOn,
  onClickOff,
  ...rest
}: ToggleProps) => {
  const [uncontrolledIsActive, setUncontrolledIsActive] = useState(isActiveDefault);

  useEffect(() => {
    setUncontrolledIsActive(isActiveDefault);
  }, [isActiveDefault]);

  const buttonClickHandler = (value: boolean, cb: Func) => {
    if (isActive === undefined) {
      if (value !== uncontrolledIsActive) {
        setUncontrolledIsActive(!uncontrolledIsActive);
      }
    }

    cb();
  };

  const toggleClassNames = classNames({
    [styles.toggle]: true,
    [styles.isWithoutBorder]: withoutBorder,
  });

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
    <div className={toggleClassNames} {...rest}>
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
