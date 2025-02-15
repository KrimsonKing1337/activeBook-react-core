import { PropsWithChildren } from 'react';

import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { foundEasterEggs } from 'utils/localStorage/foundEasterEggs';
import { Flags } from 'utils/effects/achievements/utils';
import { play } from 'utils/effects/achievements';

import styles from './EasterEgg.scss';

export type EasterEggProps = {
  [key: string]: any;
  id: string;
  onClick?: () => void;
};

export const EasterEgg = ({
  id, children, onClick = () => {
  }, ...rest
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

  return (
    <span className={styles.easterEgg} onClick={clickHandler} {...rest}>
      {children}
    </span>
  );
};
