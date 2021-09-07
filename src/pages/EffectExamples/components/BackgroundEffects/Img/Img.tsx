import React from 'react';
import { useDispatch } from 'react-redux';

import { setBackgroundImgActiveState } from 'store/effects/actions';

import { Toggle } from 'components/Toggle';

export const Img = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(setBackgroundImgActiveState(value));
  };

  return (
    <Toggle
      label={'Изображение на заднем фоне'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
