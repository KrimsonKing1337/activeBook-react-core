import { useRef } from 'react';

import { nanoid } from 'nanoid';

import { useSelector } from 'store';
import { volumeSelectors } from 'store/volume';

import { Video as DefaultVideo } from 'components/Video';

import type { BackgroundEffectVideoOptions } from 'hooks/effects/background/@types';

import { Wrapper } from '../Wrapper';

import styles from './Videos.scss';

export type VideosProps = {
  videos: BackgroundEffectVideoOptions[];
};

export const Videos = ({ videos }: VideosProps) => {
  const videosVolume = useSelector(volumeSelectors.videos);

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
      volume = videosVolume,
    } = videoCur;

    const uuid = nanoid();

    return (
      <Wrapper key={uuid} style={wrapperStyle}>
        <DefaultVideo
          passedRef={ref}
          style={style}
          className={styles.video}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          volume={volume}
        />
      </Wrapper>
    );
  });
};
