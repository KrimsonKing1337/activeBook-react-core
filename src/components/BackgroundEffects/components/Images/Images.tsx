import { useRef } from 'react';

import { Img } from 'components/Img';

import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';

import { Wrapper } from '../Wrapper';

import styles from './Images.scss';

export const Images = () => {
  const ref = useRef<HTMLImageElement>(null);

  const images = useSelector(backgroundEffectsSelectors.images);

  if (images.length === 0) {
    return null;
  }

  return images.map((imageCur) => {
    const { src, style, wrapperStyle } = imageCur;

    return (
      <Wrapper style={wrapperStyle}>
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
