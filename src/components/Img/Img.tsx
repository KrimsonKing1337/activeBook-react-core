type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  passedRef?: React.RefObject<HTMLImageElement>
  className?: string;
  src: string;
};

export const Img = ({ passedRef, className = '', src, ...etc }: ImgProps) => {
  return (
    <img
      ref={passedRef}
      className={className}
      src={src}
      alt=""
      {...etc}
    />
  );
};
