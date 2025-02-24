import { useEffect, useRef } from 'react';

type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  className?: string;
  src: string;
  defaultVolume?: number;
};

export const Video = ({ className = '', src, defaultVolume = 100, ...etc }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = defaultVolume / 100;
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      preload="auto"
      poster="/assets/img/poster-default.png"
      {...etc}
    />
  );
};
