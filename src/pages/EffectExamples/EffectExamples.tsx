import React from 'react';
import { useDispatch } from 'react-redux';

import {
  setBackgroundImgActiveState,
  setBackgroundVideoActiveState,
  setDotsActiveState,
  setInverseColorActiveState,
  setMenuActiveState,
  setSideTextActiveState
} from 'store/effects/actionsTypes';

import { PageWrapper } from 'components/PageWrapper';
import { Toggle } from 'components/Menu/components/Toggle';

export const EffectExamples = () => {
  const dispatch = useDispatch();

  const buttonForSideShadowClickHandler = (value: boolean) => {
    dispatch(setMenuActiveState(value));
  }

  const buttonForSideTextClickHandler = (value: boolean) => {
    dispatch(setSideTextActiveState(value));
  }

  const buttonForBackgroundVideoClickHandler = (value: boolean) => {
    dispatch(setBackgroundVideoActiveState(value));
  }

  const buttonForBackgroundImgClickHandler = (value: boolean) => {
    dispatch(setBackgroundImgActiveState(value));
  }

  const buttonForInverseColorClickHandler = (value: boolean) => {
    dispatch(setInverseColorActiveState(value));
  }

  const buttonForDotsClickHandler = (value: boolean) => {
    dispatch(setDotsActiveState(value));
  }

  return (
    <PageWrapper title={'Эффекты'} subtitle={'Здесь можно посмотреть все возможные эффекты'}>
      <div>
        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
        <br />
        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
        <br />
        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
      </div>

      <div className={'EffectsWrapper'}>
        <Toggle
          label={'Боковая тень'}
          isActiveDefault={false}
          onClickOn={() => buttonForSideShadowClickHandler(true)}
          onClickOff={() => buttonForSideShadowClickHandler(false)}
        />

        <Toggle
          label={'Боковой текст'}
          isActiveDefault={false}
          onClickOn={() => buttonForSideTextClickHandler(true)}
          onClickOff={() => buttonForSideTextClickHandler(false)}
        />

        <Toggle
          label={'Видео на заднем фоне'}
          isActiveDefault={false}
          onClickOn={() => buttonForBackgroundVideoClickHandler(true)}
          onClickOff={() => buttonForBackgroundVideoClickHandler(false)}
        />

        <Toggle
          label={'Изображение на заднем фоне'}
          isActiveDefault={false}
          onClickOn={() => buttonForBackgroundImgClickHandler(true)}
          onClickOff={() => buttonForBackgroundImgClickHandler(false)}
        />

        <Toggle
          label={'Инверсия цвета'}
          isActiveDefault={false}
          onClickOn={() => buttonForInverseColorClickHandler(true)}
          onClickOff={() => buttonForInverseColorClickHandler(false)}
        />

        <Toggle
          label={'Точки по углам'}
          isActiveDefault={false}
          onClickOn={() => buttonForDotsClickHandler(true)}
          onClickOff={() => buttonForDotsClickHandler(false)}
        />
      </div>
    </PageWrapper>
  );
};
