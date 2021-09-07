import React from 'react';
import { useDispatch } from 'react-redux';

import { setSideShadowActiveState } from 'store/effects/actions';

import { Toggle } from 'components/Toggle';

export const Shadow = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(setSideShadowActiveState(value));
  };

  return (
    <Toggle
      label={'Боковая тень'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
