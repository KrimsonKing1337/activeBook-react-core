import { useEffect, useRef } from 'react';

type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  className?: string;
  src: string;
  relativeVolume?: number;
};

export const Video = ({ className = '', src, relativeVolume = 100, ...etc }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = relativeVolume / 100;

      ref.current.setAttribute('data-relativeVolume', relativeVolume.toString());
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
