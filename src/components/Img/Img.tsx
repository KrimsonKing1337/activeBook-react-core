export type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  passedRef?: React.RefObject<HTMLImageElement>
  className?: string;
  src: string;
  onLoad?: () => void;
  onError?: () => void;
};

export const Img = ({
  passedRef,
  className = '',
  src,
  onLoad,
  onError,
  ...etc
}: ImgProps) => {
  return (
    <img
      ref={passedRef}
      className={className}
      src={src}
      alt=""
      onLoad={onLoad}
      onError={onError}
      {...etc}
    />
  );
};
