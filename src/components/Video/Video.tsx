import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'store';
import { volumeSelectors } from 'store/volume';
import { effectsActions, effectsSelectors } from 'store/effects/common';

type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  id: string;
  className?: string;
  src: string;
  relativeVolume?: number;
};

export const Video = ({
  id,
  className = '',
  src,
  relativeVolume = 100,
  muted = true,
  autoPlay = true,
  ...etc
}: VideoProps) => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLVideoElement>(null);
  const refCurrentTime = useRef(0);

  const { videos: videosVolume, global: globalVolume } = useSelector(volumeSelectors.all);
  const videosCurrentTime = useSelector(effectsSelectors.videosCurrentTime);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.volume = (videosVolume / 100) * (relativeVolume / 100) * (globalVolume / 100);
    ref.current.setAttribute('data-relativeVolume', relativeVolume.toString());

    if (videosCurrentTime[id]) {
      ref.current.currentTime = videosCurrentTime[id];
    }

    ref.current.addEventListener('timeupdate', () => {
      refCurrentTime.current = ref.current?.currentTime || 0;
    });

    return () => {
      if (!refCurrentTime.current) {
        return;
      }

      dispatch(effectsActions.setVideoCurrentTime({
        id,
        currentTime: refCurrentTime.current,
      }));
    };
  }, []);

  return (
    <video
      ref={ref}
      data-id={id}
      data-autoPlay={autoPlay}
      className={className}
      src={src}
      preload="auto"
      poster="/assets/img/poster-default.png"
      muted={muted}
      {...etc}
    />
  );
};
