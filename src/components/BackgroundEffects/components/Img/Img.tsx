import { useRef } from 'react';

import { Img as DefaultImg } from 'components/Img';

import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';

import { Wrapper } from '../Wrapper';

import styles from './Img.scss';

export const Img = () => {
  const ref = useRef<HTMLImageElement>(null);

  const img = useSelector(backgroundEffectsSelectors.img);

  if (!img) {
    return null;
  }

  const { src, style, wrapperStyle } = img;

  return (
    <Wrapper style={wrapperStyle}>
      <DefaultImg
        passedRef={ref}
        style={style}
        className={styles.img}
        src={src}
      />
    </Wrapper>
  );
};
