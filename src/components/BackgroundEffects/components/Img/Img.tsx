import { useEffect, useRef } from 'react';

import { Img as DefaultImg } from 'components/Img';

import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';

import { getCssPositionByValue } from 'components/BackgroundEffects/utils';

import { Wrapper } from '../Wrapper';

import styles from './Img.scss';

export const Img = () => {
  const ref = useRef<HTMLImageElement>(null);

  const img = useSelector(backgroundEffectSelectors.img);

  useEffect(() => {
    if (img && ref.current) {
      const { css = '', position = 'center' } = img;

      const positionCss = getCssPositionByValue(position);

      ref.current.setAttribute('style', positionCss);

      if (css) {
        ref.current.setAttribute('style', css);
      }
    }
  }, [img]);

  if (!img) {
    return null;
  }

  const { src, stretch = 'cover' } = img;

  return (
    <Wrapper>
      <DefaultImg
        ref={ref}
        style={{ objectFit: stretch }}
        className={styles.img}
        src={src}
      />
    </Wrapper>
  );
};
