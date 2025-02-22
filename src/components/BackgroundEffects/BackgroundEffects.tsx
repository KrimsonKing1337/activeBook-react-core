import { useSelector } from 'store';

import { backgroundEffectSelectors } from 'store/effects/background';

import { Video, Img, Shadow, Dots } from './components';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const style = useSelector(backgroundEffectSelectors.style);
  const video = useSelector(backgroundEffectSelectors.img);
  const img = useSelector(backgroundEffectSelectors.img);
  const Component = useSelector(backgroundEffectSelectors.Component);

  const oneOfBgIsActive = video || img || Component;

  return (
    <div style={style} className={styles.backgroundEffectsWrapper}>
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
