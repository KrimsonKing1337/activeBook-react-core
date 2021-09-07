import React from 'react';
import { useDispatch } from 'react-redux';

import { setDotsActiveState } from 'store/effects/actions';

import { Toggle } from 'components/Toggle';

export const Dots = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(setDotsActiveState(value));
  };

  return (
    <Toggle
      label={'Точки по углам'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
