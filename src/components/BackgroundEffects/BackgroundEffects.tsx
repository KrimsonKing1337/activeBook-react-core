import { Video } from 'components/Video';
import { Img } from 'components/Img';

import { useSelector } from 'store';

import { effectsSelectors } from 'store/effects/common';
import { backgroundVideoEffectSelectors } from 'store/effects/background/video';
import { backgroundImgEffectSelectors } from 'store/effects/background/img';

import { Dots } from './components/Dots';

import styles from './BackgroundEffects.scss';

type BackgroundEffectsProps = {
  shadowColor?: string;
}

export const BackgroundEffects = ({ shadowColor }: BackgroundEffectsProps) => {
  const backgroundVideoIsActive = useSelector(backgroundVideoEffectSelectors.isActive);
  const backgroundVideoSrc = useSelector(backgroundVideoEffectSelectors.src);
  const backgroundImgIsActive = useSelector(backgroundImgEffectSelectors.isActive);
  const backgroundImgSrc = useSelector(backgroundImgEffectSelectors.src);
  const dotsIsActive = useSelector(effectsSelectors.dotsIsActive);

  const oneOfBgIsActive = backgroundVideoIsActive || backgroundImgIsActive;

  return (
    <div className={styles.backgroundEffectsWrapper}>
      {dotsIsActive && (
        <Dots />
      )}

      {oneOfBgIsActive && (
        <div className={styles.backgroundObjectsWrapper}>
          <div className={styles.backgroundObjectsShadow} style={{ backgroundImage: shadowColor }} />

          {backgroundVideoIsActive && (
            <div className={styles.backgroundObjectWrapper}>
              <Video
                src={backgroundVideoSrc}
                autoPlay
                loop
                muted
              />
            </div>
          )}

          {backgroundImgIsActive && (
            <div className={styles.backgroundObjectWrapper}>
              <Img src={backgroundImgSrc} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
