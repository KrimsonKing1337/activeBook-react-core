import React from 'react';

type ImgPropsType = {
  className: string;
  src: string;
};

export const Img = ({ className, src }: ImgPropsType) => {
  return (
    <div className={className}>
      <img src={src} alt="" />
    </div>
  );
};
