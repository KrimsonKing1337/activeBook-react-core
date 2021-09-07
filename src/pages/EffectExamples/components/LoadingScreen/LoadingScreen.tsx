import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIsLoading } from 'store/main/actions';

import { Toggle } from 'components/Toggle';

export const LoadingScreen = () => {
  const dispatch = useDispatch();
  
  const [buttonForLoadingStateIsActive, setButtonForLoadingStateIsActive] = useState(false);

  const buttonForLoadingStateClickHandler = (value: boolean) => {
    dispatch(setIsLoading(value));
    setButtonForLoadingStateIsActive(value);

    setTimeout(() => {
      document.addEventListener('click', () => {
        dispatch(setIsLoading(false));
        setButtonForLoadingStateIsActive(false);
      }, { once: true });
    }, 0);
  };
  
  return (
    <Toggle
      label={'Состояние загрузки (для отмены - клик в любое место)'}
      isActiveDefault={false}
      isActive={buttonForLoadingStateIsActive}
      onClickOn={() => buttonForLoadingStateClickHandler(true)}
      onClickOff={() => buttonForLoadingStateClickHandler(false)}
    />
  );
};
