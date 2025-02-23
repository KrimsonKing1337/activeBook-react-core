import { useRef } from 'react';

import { Video as DefaultVideo } from 'components/Video';

import type { BackgroundEffectVideoOptions } from 'hooks/effects/background/@types';

import { Wrapper } from '../Wrapper';

import styles from './Videos.scss';

export type VideosProps = {
  videos: BackgroundEffectVideoOptions[];
};

export const Videos = ({ videos }: VideosProps) => {
  const ref = useRef<HTMLVideoElement>(null);

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
