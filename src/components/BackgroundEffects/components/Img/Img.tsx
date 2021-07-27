import React from 'react';

type ImgProps = {
  className: string;
  src: string;
};

export const Img = ({ className, src }: ImgProps) => {
  return (
    <div className={className}>
      <img src={src} alt="" />
    </div>
  );
};
