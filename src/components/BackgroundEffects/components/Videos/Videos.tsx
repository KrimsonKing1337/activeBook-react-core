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
      id,
      src,
      wrapperStyle,
      style,
      autoPlay = true,
      loop = true,
      muted = true,
      relativeVolume = 100,
    } = videoCur;

    /*
      todo: возможно, стоит autoPlay убрать из параметров.
       есть подозрение, что видео начинает воспроизведение до отображения страницы (PageWrapper и Narrative)
    */

    return (
      <Wrapper key={id} style={wrapperStyle}>
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
      </Wrapper>
    );
  });
};
