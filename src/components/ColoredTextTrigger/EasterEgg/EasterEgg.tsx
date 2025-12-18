import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import { foundEasterEggs } from 'utils/localStorage/foundEasterEggs';

import * as styles from './EasterEgg.scss';

export type EasterEggProps = React.HTMLAttributes<HTMLSpanElement> & {
  id: string;
  className?: string;
  onClick?: () => void;
};

export const EasterEgg = ({
  children,
  id,
  className = '',
  onClick = () => {},

  ...etc
}: PropsWithChildren<EasterEggProps>) => {
  const clickHandler = () => {
    foundEasterEggs.set(id);

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
