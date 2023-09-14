import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'store';
import { achievementsSelectors } from 'store/achievements';
import { mainActions, mainSelectors } from 'store/main';
import { FlagsWithoutHidden, hiddenAchievements, voc } from 'utils/effects/achievements/utils';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item, ItemProps } from './Item';

import styles from './AchievementsProgress.scss';

type Items = ItemProps & {
  key: string;
}

export const AchievementsProgress = () => {
  const dispatch = useDispatch();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const achievements = useSelector(achievementsSelectors.achievements);

  const [items, setItems] = useState<Items[]>([]);

  const hiddenLength = useRef(0);

  useEffect(() => {
    const achievementsWithoutHidden = { ...voc };

    hiddenLength.current = 0;

    if (!achievements) {
      hiddenLength.current = hiddenAchievements.length;
    } else {
      hiddenAchievements.forEach((cur) => {
        if (!achievements[cur]) {
          delete achievementsWithoutHidden[cur];

          hiddenLength.current = hiddenLength.current + 1;
        }
      });
    }

    const newItemsInOrder: Record<number, Items> = {};

    Object.keys(achievementsWithoutHidden).forEach((key) => {
      const keyCur = key as FlagsWithoutHidden;
      const status = !!achievements?.[keyCur];

      const { order, title, type } = voc[keyCur];

      newItemsInOrder[order] = {
        key: keyCur,
        title,
        status,
        type,
      };
    });

    const newItems = Object.values(newItemsInOrder);

    setItems(newItems);

  }, [achievements]);

  const closeButtonClickHandler = () => {
    dispatch(mainActions.setMenuActiveState(null));
  };

  const isOpen = menuActiveState === 'achievementsProgress';

  const textAboutHidden = hiddenLength.current === 1
    ? '+ одно скрытое достижение'
    : `+ скрытых достижений: ${hiddenLength.current} шт.`;

  return (
    <Overflow isOpen={isOpen}>
      <Header label="Прогресс достижений" />

      <div className={styles.itemsWrapper}>
        {items.map(({ key, title, status, type }) => (
          <Item
            key={key}
            title={title}
            status={status}
            type={type}
          />
        ))}

        {!!hiddenLength.current && (
          <div className={styles.textAboutHidden}>
            {textAboutHidden}
          </div>
        )}
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
