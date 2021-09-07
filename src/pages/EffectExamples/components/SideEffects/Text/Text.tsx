import React from 'react';
import { useDispatch } from 'react-redux';

import { setSideTextActiveState } from 'store/effects/actions';

import { Toggle } from 'components/Toggle';

export const Text = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(setSideTextActiveState(value));
  };

  return (
    <Toggle
      label={'Боковой текст'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
