import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';

import { mainSelectors } from 'store/main';
import { effectsActions } from 'store/effects/common';

import { UseBackgroundEffectImageOptions } from 'hooks/effects/background/@types';

import { Img } from 'components/Img';

import * as styles from './Images.scss';

export type ImagesProps = {
  images: UseBackgroundEffectImageOptions[];
};

export const Images = ({ images }: ImagesProps) => {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  if (images.length === 0) {
    return null;
  }

  useEffect(() => {
    dispatch(effectsActions.setImagesAmount(images.length));

    return () => {
      dispatch(effectsActions.setImagesAmount(0));
      dispatch(effectsActions.setImagesReadyAmount(0));
    };
  }, [page, images.length]);

  const loadHandler = () => {
    dispatch(effectsActions.setImageReady());
  };

  return images.map((imageCur, index) => {
    const { src, style } = imageCur;

    const uuid = `${index}___${src}`;

    return (
      <Img
        key={uuid}
        style={style}
        className={styles.Img}
        src={src}
        onLoad={loadHandler}
        onError={loadHandler}
      />
    );
  });
};
