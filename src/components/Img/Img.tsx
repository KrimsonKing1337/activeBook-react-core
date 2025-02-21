type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  ref?: React.RefObject<HTMLImageElement>
  className?: string;
  src: string;
};

export const Img = ({ ref, className = '', src, ...etc }: ImgProps) => {
  return (
    <img
      ref={ref}
      className={className}
      src={src}
      alt=""
      {...etc}
    />
  );
};
