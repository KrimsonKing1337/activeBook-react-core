import React from 'react';
import { useDispatch } from 'react-redux';

import { setMenuActiveState, setSideTextActiveState } from 'store/effects/actionsTypes'

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

  return (
    <PageWrapper title={'Эффекты'} subtitle={'Здесь можно посмотреть все возможные эффекты'}>
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
      </div>
    </PageWrapper>
  );
};
