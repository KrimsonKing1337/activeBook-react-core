import { useEffect, useState } from 'react';

import { Flags } from 'utils/effects/achievements/utils';
import { play } from 'utils/effects/achievements';
import { achievements } from 'utils/localStorage/achievements';

import { createDotsAsArray, getPlaceInLineByLocationStyles, orderDefaultState } from './utils';

import styles from './Dots.scss';

export const Dots = () => {
  const [order, setOrder] = useState<Record<number, number>>(orderDefaultState);

  useEffect(() => {
    const wasFound = achievements.get(Flags.superEasterEggFound);

    if (wasFound) {
      return;
    }

    const setValue = (index: number) => {
      const firstUnclicked = Object.values(order).indexOf(0);

      const keyStr = Object.keys(order)[firstUnclicked];
      const key = parseInt(keyStr, 10);

      const newValues = {
        ...order,
        [key]: index,
      };

      setOrder(newValues);
    };

    const listener = (e: MouseEvent) => {
      const elementsUnderCursor = document.elementsFromPoint(e.clientX, e.clientY);

      if (!elementsUnderCursor) {
        return;
      }

      const dotElement = elementsUnderCursor.find((elementCur) => {
        if (elementCur.parentElement) {
          const str = elementCur.parentElement.classList.value;

          if (str.includes('dotsWrapper')) {
            return elementCur;
          }
        }

        return false;
      });

      if (!dotElement) {
        return;
      }

      const computedStyles = window.getComputedStyle(dotElement);

      const styles = {
        top: computedStyles.top,
        right: computedStyles.right,
        bottom: computedStyles.bottom,
        left: computedStyles.left,
      };

      const placeInLine = getPlaceInLineByLocationStyles(styles);

      setValue(placeInLine);
    };

    document.addEventListener('click', listener, { passive: true });

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [order, setOrder]);

  useEffect(() => {
    const orderValues = Object.values(order);

    const allClicked = orderValues.indexOf(0) === -1;

    if (!allClicked) {
      return;
    }

    const orderKeys = Object.keys(order);

    for (let i = 0; i < orderKeys.length; i++) {
      const keyCur = orderKeys[i];
      const valueCur = orderValues[i].toString();

      if (keyCur !== valueCur) {
        setOrder(orderDefaultState);

        return;
      }
    }

    play({
      id: Flags.superEasterEggFound,
      text: 'Суперсекрет! Не могу поверить, что ты это нашёл/нашла!',
      type: 'platinum',
    });

    return () => {
      setOrder(orderDefaultState);
    };
  }, [order]);

  const dots = createDotsAsArray();

  return (
    <div className={styles.dotsWrapper}>
      {dots.map((key) => <div key={key} className={styles.dot} />)}
    </div>
  );
};
