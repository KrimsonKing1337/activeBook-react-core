import { Video } from 'components/Video';

import type { BackgroundEffectVideoOptions } from 'hooks/effects/background/@types';

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
      id,
      src,
      style,
      autoPlay = true,
      loop = true,
      muted = true,
      relativeVolume = 100,
    } = videoCur;

    return (
      <Video
        id={id}
        style={style}
        className={styles.video}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        relativeVolume={relativeVolume}
      />
    );
  });
};
