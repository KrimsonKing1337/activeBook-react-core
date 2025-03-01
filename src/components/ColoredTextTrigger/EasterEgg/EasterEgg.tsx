import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { foundEasterEggs } from 'utils/localStorage/foundEasterEggs';
import { Flags } from 'utils/effects/achievements/utils';
import { play } from 'utils/effects/achievements';

import styles from './EasterEgg.scss';

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
  const easterEggsLength = useSelector(mainSelectors.easterEggs);

  const clickHandler = () => {
    foundEasterEggs.set(id);

    const foundEasterEggsFromLocalStorage = foundEasterEggs.get();
    const foundEasterEggsLength = Object.keys(foundEasterEggsFromLocalStorage).length;

    if (foundEasterEggsLength === easterEggsLength) {
      play({
        id: Flags.allEasterEggsFound,
        text: 'Все пасхалки найдены! Невероятно!',
        type: 'gold',
      });
    }

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
