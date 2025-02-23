import { useSelector } from 'store';

import { backgroundEffectsSelectors } from 'store/effects/background';

import { Videos, Images, Shadow, Dots } from './components';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const style = useSelector(backgroundEffectsSelectors.style);
  const videos = useSelector(backgroundEffectsSelectors.images);
  const images = useSelector(backgroundEffectsSelectors.images);
  const Component = useSelector(backgroundEffectsSelectors.Component);

  const oneOfBgIsActive = videos.length || images.length || Component;

  return (
    <div style={style} className={styles.backgroundEffectsWrapper}>
      <Dots />

      {oneOfBgIsActive && (
        <div className={styles.backgroundObjectsWrapper}>
          <Shadow />

          {Component}

          <Videos />
          <Images />
        </div>
      )}
    </div>
  );
};
