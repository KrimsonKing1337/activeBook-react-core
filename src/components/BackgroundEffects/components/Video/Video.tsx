import React from 'react';

type VideoPropsType = {
  className: string;
  src: string;
};

export const Video = ({ className, src }: VideoPropsType) => {
  return (
    <div className={className}>
      <video autoPlay loop muted src={src} />
    </div>
  );
};
