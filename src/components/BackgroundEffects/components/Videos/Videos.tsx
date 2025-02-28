import { nanoid } from 'nanoid';

import { Video } from 'components/Video';

import type { BackgroundEffectVideoOptions } from 'hooks/effects/background/@types';

import { Wrapper } from '../Wrapper';

import styles from './Videos.scss';

export type VideosProps = {
  videos: BackgroundEffectVideoOptions[];
};

export const Videos = ({ videos }: VideosProps) => {
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
      relativeVolume = 100,
    } = videoCur;

    const uuid = nanoid();

    return (
      <Wrapper key={uuid} style={wrapperStyle}>
        <Video
          style={style}
          className={styles.video}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          relativeVolume={relativeVolume}
        />
      </Wrapper>
    );
  });
};
