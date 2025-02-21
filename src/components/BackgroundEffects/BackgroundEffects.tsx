import { useEffect, useRef } from 'react';

import { useSelector } from 'store';

import { backgroundEffectSelectors } from 'store/effects/background';

import { Video, Img, Shadow, Dots } from './components';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const css = useSelector(backgroundEffectSelectors.css);
  const video = useSelector(backgroundEffectSelectors.img);
  const img = useSelector(backgroundEffectSelectors.img);
  const Component = useSelector(backgroundEffectSelectors.Component);

  useEffect(() => {
    if (css && ref.current) {
      ref.current.setAttribute('style', css);
    }
  }, [css]);

  // todo: проверить - это вообще нужно? мб можно враппер всегда рендерить
  const oneOfBgIsActive = video || img || Component;

  return (
    <div ref={ref} className={styles.backgroundEffectsWrapper}>
      <Dots />

      {oneOfBgIsActive && (
        <div className={styles.backgroundObjectsWrapper}>
          <Shadow />

          {Component}

          <Video />
          <Img />
        </div>
      )}
    </div>
  );
};
