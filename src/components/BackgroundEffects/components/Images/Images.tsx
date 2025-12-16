import { nanoid } from 'nanoid';

import { UseBackgroundEffectImageOptions } from 'hooks/effects/background/@types';

import { Img } from 'components/Img';


import * as styles from './Images.scss';

export type ImagesProps = {
  images: UseBackgroundEffectImageOptions[]
};

export const Images = ({ images }: ImagesProps) => {
  if (images.length === 0) {
    return null;
  }

  return images.map((imageCur) => {
    const { src, style } = imageCur;

    const uuid = nanoid();

    return (
      <Img
        key={uuid}
        style={style}
        className={styles.img}
        src={src}
      />
    );
  });
};
