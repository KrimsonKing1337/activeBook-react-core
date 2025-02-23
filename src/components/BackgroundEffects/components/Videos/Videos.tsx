import { useRef } from 'react';

import { Video as DefaultVideo } from 'components/Video';

import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';

import { Wrapper } from '../Wrapper';

import styles from './Videos.scss';

export const Videos = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const videos = useSelector(backgroundEffectsSelectors.videos);

  if (videos.length === 0) {
    return null;
  }

  return videos.map((videoCur) => {
    const {
      src,
      wrapperStyle,
      style,
      autoPlay = true,
      loop = true,
      muted = true,
    } = videoCur;

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
  });
};
