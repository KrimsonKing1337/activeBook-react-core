import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './EasterEgg.scss';

export type EasterEggProps = React.HTMLAttributes<HTMLSpanElement> & {
  id: string;
  className?: string;
  onClick?: () => void;
};

export const EasterEgg = ({
  children,
  className = '',
  onClick = () => {},

  ...etc
}: PropsWithChildren<EasterEggProps>) => {
  const clickHandler = () => {
    onClick();
  };

  const easterEggClassNames = classNames({
    [styles.easterEgg]: true,
    [className]: !!className,
  });

  return (
    <span className={easterEggClassNames} onClick={clickHandler} {...etc}>
      {children}
    </span>
  );
};
