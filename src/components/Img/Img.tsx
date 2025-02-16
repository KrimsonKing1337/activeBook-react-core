type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  className?: string;
  src: string;
};

export const Img = ({ className = '', src, ...etc }: ImgProps) => {
  return (
    <img
      className={className}
      src={src}
      alt=""
      {...etc}
    />
  );
};
