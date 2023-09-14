type VideoProps = {
  [key: string]: any;
  className?: string;
  src: string;
};

export const Video = ({ className = '', src, ...etc }: VideoProps) => {
  return (
    <video
      className={className}
      src={src}
      preload="auto"
      poster="/assets/img/poster-default.png"
      {...etc}
    />
  );
};
