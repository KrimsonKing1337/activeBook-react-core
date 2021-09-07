import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFlashlight } from 'store/config/actions';
import { configSelectors } from 'store/config/reducer';

import { Toggle } from '../../../Toggle';

export const Flashlight = () => {
  const dispatch = useDispatch();
  const flashlightState = useSelector(configSelectors.flashlight);

  const toggleClickOnHandler = () => {
    dispatch(setFlashlight(true));
  };

  const toggleClickOffHandler = () => {
    dispatch(setFlashlight(false));
  };

  return (
    <Toggle
      label={'Вспышка'}
      isActiveDefault={flashlightState}
      onClickOn={toggleClickOnHandler}
      onClickOff={toggleClickOffHandler}
    />
  );
};
