import { PropsWithChildren, useEffect, useRef } from 'react';

import Hammer from 'hammerjs';

import { configSelectors } from 'store/config';
import { fontEffectsSelectors } from 'store/effects/font';

import { useSelector } from 'store';

import { mainSelectors } from 'store/main';

import { useGoToPage } from 'hooks/control/useGoToPage';

import * as styles from './Narrative.scss';

export const Narrative = ({ children }: PropsWithChildren) => {
  const { goNextPage, goPrevPage } = useGoToPage();

  const currentPage = useSelector(mainSelectors.page);

  // const fontSize = useSelector(configSelectors.fontSize);
  const lineHeight = useSelector(configSelectors.lineHeight);

  const fontColor = useSelector(fontEffectsSelectors.color);
  const fontStyle = useSelector(fontEffectsSelectors.style);

  const narrativeStyle = {
    // fontSize: `${fontSize}%`,
    color: fontColor,
  };

  const textStyle = {
    lineHeight: `${lineHeight}%`,
    ...fontStyle,
  };

  const ref = useRef<HTMLDivElement>(null);
  const currentPageRef = useRef(0);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
    ref.current?.focus();
  }, []);

  useEffect(() => {
    if (!ref.current || currentPageRef.current === 0) {
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

      if (isNext) {
        goNextPage();
      } else {
        goPrevPage();
      }
    });

    return () => {
      hammertime.off('swipe');
      hammertime.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      id="narrative"
      className={styles.Narrative}
      style={narrativeStyle}
      tabIndex={0}
    >
      <div className="Narrative__Text" style={textStyle}>
        {children}
      </div>
    </div>
  );
};
