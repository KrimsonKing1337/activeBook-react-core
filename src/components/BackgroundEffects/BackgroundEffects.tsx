import React from 'react';
import { useSelector } from 'react-redux';

import { effectsSelectors } from 'store/effects/reducer';

import { Dots } from './components/Dots';
import { Video } from './components/Video';
import { Img } from './components/Img';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const backgroundVideoIsActive = useSelector(effectsSelectors.backgroundVideoIsActive);
  const backgroundImgIsActive = useSelector(effectsSelectors.backgroundImgIsActive);
  const dotsIsActive = useSelector(effectsSelectors.dotsIsActive);

  return (
    <div className={styles.backgroundEffectsWrapper}>
      {dotsIsActive && <Dots />}

      {(backgroundVideoIsActive || backgroundImgIsActive) && (
        <div className={styles.backgroundObjectsWrapper}>
          <div className={styles.backgroundObjectsShadow} />

          {backgroundVideoIsActive && (
            <Video className={styles.backgroundObjectWrapper} src={'/assets/videos/TV_static-2.mp4'} />
          )}

          {backgroundImgIsActive && (
            <Img className={styles.backgroundObjectWrapper} src={'/assets/img/cinemagraph.gif'} />
          )}
        </div>
      )}
    </div>
  );
};
