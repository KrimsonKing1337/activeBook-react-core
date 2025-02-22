import { useRef } from 'react';

import { Video as DefaultVideo } from 'components/Video';

import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';

import { Wrapper } from '../Wrapper';

import styles from './Video.scss';

export const Video = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const video = useSelector(backgroundEffectSelectors.video);

  if (!video) {
    return null;
  }

  const {
    src,
    wrapperStyle,
    style,
    autoPlay = true,
    loop = true,
    muted = true,
  } = video;

  return (
    <Wrapper style={wrapperStyle}>
      <DefaultVideo
        passedRef={ref}
        style={style}
        className={styles.video}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
    </Wrapper>
  );
};
