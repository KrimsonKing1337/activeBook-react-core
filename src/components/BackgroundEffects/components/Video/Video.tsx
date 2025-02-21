import { useEffect, useRef } from 'react';

import { Video as DefaultVideo } from 'components/Video';

import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';

import { getCssPositionByValue } from 'components/BackgroundEffects/utils';

import { Wrapper } from '../Wrapper';

import styles from './Video.scss';

export const Video = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const video = useSelector(backgroundEffectSelectors.video);

  useEffect(() => {
    if (video && ref.current) {
      const { css = '', position = 'center' } = video;

      const positionCss = getCssPositionByValue(position);

      ref.current.setAttribute('style', positionCss);

      if (css) {
        ref.current.setAttribute('style', css);
      }
    }
  }, [video]);

  if (!video) {
    return null;
  }

  const {
    src,
    stretch = 'cover',
    autoPlay = true,
    loop = true,
    muted = true,
  } = video;

  return (
    <Wrapper>
      <DefaultVideo
        ref={ref}
        style={{ objectFit: stretch }}
        className={styles.video}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
    </Wrapper>
  );
};
