import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';

import { mainSelectors } from 'store/main';
import { effectsActions } from 'store/effects/common';

import type { BackgroundEffectVideoOptions } from 'hooks/effects/background/@types';

import { Video } from 'components/Video';

import * as styles from './Videos.scss';

export type VideosProps = {
  videos: BackgroundEffectVideoOptions[];
};

export const Videos = ({ videos }: VideosProps) => {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  if (videos.length === 0) {
    return null;
  }

  useEffect(() => {
    dispatch(effectsActions.setVideosAmount(videos.length));

    return () => {
      dispatch(effectsActions.setVideosAmount(0));
      dispatch(effectsActions.setVideosReadyAmount(0));
    };
  }, [page, videos.length]);

  const canPlayHandler = () => {
    dispatch(effectsActions.setVideoReady());
  };

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
        key={id}
        id={id}
        style={style}
        className={styles.video}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        relativeVolume={relativeVolume}
        onCanPlay={canPlayHandler}
        onError={canPlayHandler}
      />
    );
  });
};
