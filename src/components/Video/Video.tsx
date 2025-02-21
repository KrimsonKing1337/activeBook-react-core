type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
  ref?: React.RefObject<HTMLVideoElement>
  className?: string;
  src: string;
};

export const Video = ({ ref, className = '', src, ...etc }: VideoProps) => {
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
