import { PropsWithChildren, useEffect, useRef } from 'react';

import Hammer from 'hammerjs';

import { useSelector } from 'store';
import { configSelectors } from 'store/config';
import { fontEffectsSelectors } from 'store/effects/font';

import { goNextPage, goPrevPage } from 'utils/control/goToPage';

import styles from './Narrative.scss';

export const Narrative = ({ children }: PropsWithChildren) => {
  const fontSize = useSelector(configSelectors.fontSize);
  const lineHeight = useSelector(configSelectors.lineHeight);

  const fontColor = useSelector(fontEffectsSelectors.color);
  const fontStyle = useSelector(fontEffectsSelectors.style);

  const narrativeStyle = {
    fontSize: `${fontSize}%`,
    color: fontColor,
  };

  const textStyle = {
    lineHeight: `${lineHeight}%`,
    ...fontStyle,
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
    ref.current?.focus();
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const hammertime = new Hammer(ref.current, { domEvents: true });

    hammertime.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 50,
    });

    hammertime.on('swipe', (e) => {
      const { direction } = e;

      const isNext = direction === Hammer.DIRECTION_LEFT;

      isNext ? goNextPage() : goPrevPage();
    });

    return () => {
      hammertime.off('swipe');
      hammertime.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={styles.narrative}
      style={narrativeStyle}
      tabIndex={0}
    >
      <div className={styles.text} style={textStyle}>
        {children}
      </div>
    </div>
  );
};
