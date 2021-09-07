import React from 'react';
import { useDispatch } from 'react-redux';

import { setInverseColorActiveState } from 'store/effects/actions';

import { Toggle } from 'components/Toggle';

export const InverseColor = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(setInverseColorActiveState(value));
  };

  return (
    <Toggle
      label={'Инверсия цвета'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
