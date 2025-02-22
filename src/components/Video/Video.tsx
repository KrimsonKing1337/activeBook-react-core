type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  passedRef?: React.RefObject<HTMLVideoElement>
  className?: string;
  src: string;
};

export const Video = ({ passedRef, className = '', src, ...etc }: VideoProps) => {
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
