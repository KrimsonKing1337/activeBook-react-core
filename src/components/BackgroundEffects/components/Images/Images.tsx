import { useRef } from 'react';

import { nanoid } from 'nanoid';

import { Img } from 'components/Img';

import { UseBackgroundEffectImageOptions } from 'hooks/effects/background/@types';

import { Wrapper } from '../Wrapper';

import styles from './Images.scss';

export type ImagesProps = {
  images: UseBackgroundEffectImageOptions[]
};

export const Images = ({ images }: ImagesProps) => {
  const ref = useRef<HTMLImageElement>(null);

  if (images.length === 0) {
    return null;
  }

  return images.map((imageCur) => {
    const { src, style, wrapperStyle } = imageCur;

    const uuid = nanoid();

    return (
      <Wrapper key={uuid} style={wrapperStyle}>
        <Img
          passedRef={ref}
          style={style}
          className={styles.img}
          src={src}
        />
      </Wrapper>
    );
  });
};
