import { useSelector } from 'store';

import { backgroundEffectsSelectors } from 'store/effects/background';

import { Videos, Images, Shadow, Dots } from './components';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const effects = useSelector(backgroundEffectsSelectors.effects);

  Object.keys(effects).map((keyCur) => {
    const effectCur = effects[keyCur];

    const {
      videos = [],
      images = [],
      Component = null,
      shadow = {},
      style = {},
    } = effectCur;

    const oneOfBgIsActive = !!videos.length || !!images.length || !!Component;

    return (
      <div style={style} className={styles.backgroundEffectsWrapper}>
        <Dots />

        {oneOfBgIsActive && (
          <div className={styles.backgroundObjectsWrapper}>
            <Shadow options={shadow} />

            {Component}

            <Videos videos={videos} />
            <Images images={images} />
          </div>
        )}
      </div>
    );
  });
};
