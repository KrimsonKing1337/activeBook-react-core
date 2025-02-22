import { useSelector } from 'store';

import { backgroundEffectsSelectors } from 'store/effects/background';

import { Video, Img, Shadow, Dots } from './components';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const style = useSelector(backgroundEffectsSelectors.style);
  const video = useSelector(backgroundEffectsSelectors.img);
  const img = useSelector(backgroundEffectsSelectors.img);
  const Component = useSelector(backgroundEffectsSelectors.Component);

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
