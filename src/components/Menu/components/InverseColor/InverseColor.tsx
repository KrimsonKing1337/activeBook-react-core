import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInverseColor } from 'store/config/actions';
import { configSelectors } from 'store/config/reducer';

import { Toggle } from '../../../Toggle';

export const InverseColor = () => {
  const dispatch = useDispatch();
  const inverseColorState = useSelector(configSelectors.inverseColor);

  const toggleClickOnHandler = () => {
    dispatch(setInverseColor(true));
  };

  const toggleClickOffHandler = () => {
    dispatch(setInverseColor(false));
  };

  return (
    <Toggle
      label={'Инверсия цвета'}
      isActiveDefault={inverseColorState}
      onClickOn={toggleClickOnHandler}
      onClickOff={toggleClickOffHandler}
    />
  );
};
