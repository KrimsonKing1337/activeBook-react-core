import { useEffect, useRef } from 'react';

import { useSelector } from 'store';
import { volumeSelectors } from 'store/volume';

type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  className?: string;
  src: string;
  relativeVolume?: number;
};

export const Video = ({
  className = '',
  src,
  relativeVolume = 100,
  muted = true,
  autoPlay = true,
  ...etc
}: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  const { videos: videosVolume, global: globalVolume } = useSelector(volumeSelectors.all);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.volume = (videosVolume / 100) * (relativeVolume / 100) * (globalVolume / 100);
    ref.current.setAttribute('data-relativeVolume', relativeVolume.toString());
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      preload="auto"
      poster="/assets/img/poster-default.png"
      muted={muted}
      autoPlay={autoPlay}
      {...etc}
    />
  );
};
