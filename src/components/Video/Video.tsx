import { useEffect } from 'react';

type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  passedRef?: React.RefObject<HTMLVideoElement>
  className?: string;
  src: string;
  volume?: number;
};

export const Video = ({ passedRef, className = '', src, volume = 100, ...etc }: VideoProps) => {
  useEffect(() => {
    if (passedRef?.current) {
      passedRef.current.volume = volume / 100;
    }
  }, [passedRef]);

  return (
    <video
      ref={passedRef}
      className={className}
      src={src}
      preload="auto"
      poster="/assets/img/poster-default.png"
      {...etc}
    />
  );
};
