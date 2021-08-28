import React from 'react';

type VideoProps = {
  className: string;
  src: string;
};

export const Video = ({ className, src }: VideoProps) => {
  return (
    <div className={className}>
      <video autoPlay loop muted src={src} poster="/assets/img/poster-default.png" />
    </div>
  );
};
