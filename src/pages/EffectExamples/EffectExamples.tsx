import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Howl } from 'howler';
import {
  setBackgroundImgActiveState,
  setBackgroundVideoActiveState,
  setDotsActiveState,
  setInverseColorActiveState,
  setMenuActiveState,
  setSideTextActiveState
} from 'store/effects/actionsTypes';
import { setAll as setAllVolume } from 'store/volume/actionsTypes';
import { setAll as setAllConfig } from 'store/config/actionsTypes';
import { volumeSelectors } from 'store/volume/reducer';
import { configSelectors } from 'store/config/reducer';

import { PageWrapper } from 'components/PageWrapper';
import { Toggle } from 'components/Menu/components/Toggle';

import { setThemeCss } from 'utils/setThemeCss';

export const EffectExamples = () => {
  const dispatch = useDispatch();
  const config = useSelector(configSelectors.all);
  const volume = useSelector(volumeSelectors.all);

  const [singleSound, setSingleSound] = useState<Howl>();
  const [loopSound, setLoopSound] = useState<Howl>();

  useEffect(() => {
    const singleSound = new Howl({
      src: ['assets/audios/single.mp3'],
    });

    const loopSound = new Howl({
      src: ['assets/audios/loop.mp3'],
      loop: true,
    });

    setSingleSound(singleSound);
    setLoopSound(loopSound);
  }, []);

  // todo: создать доп обёртку после App, туда это вынести
  useEffect(() => {
    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');

    if (!configAsJson || !volumeAsJson) {
      return;
    }

    const config = JSON.parse(configAsJson);
    const volume = JSON.parse(volumeAsJson);

    dispatch(setAllConfig(config));
    dispatch(setAllVolume(volume));

    setThemeCss(config.theme); // todo: вынести в saga
  }, []);

  useEffect(() => {
    const listener = () => {
      const configAsJson = JSON.stringify(config);
      const volumeAsJson = JSON.stringify(volume);

      localStorage.setItem('config', configAsJson);
      localStorage.setItem('volume', volumeAsJson);
    };

    window.addEventListener('beforeunload', listener);

    return () => window.removeEventListener('beforeunload', listener);
  }, [config, volume]);

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

  const buttonForSingleSoundClickHandler = () => {
    singleSound?.play();

    singleSound?.once('end', () => {
      // todo: переключать кнопку в дефолтное состояние
    });
  }

  const buttonForLoopSoundClickHandler = (value: boolean) => {
    value ? loopSound?.play() : loopSound?.stop();
  }

  return (
    <PageWrapper title={'Эффекты'} subtitle={'Здесь можно посмотреть все возможные эффекты'}>
      {/* Многострочный текст-рыба для проверки эффектов и изменений в настройках: */}
      <div>
        Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
        позволяет оценить значение существенных финансовых и административных условий.
        С другой стороны начало повседневной работы по формированию позиции требуют определения и уточнения
        существенных финансовых и административных условий.
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

        <Toggle
          label={'Одиночный звук'}
          isActiveDefault={false}
          onClickOn={() => buttonForSingleSoundClickHandler()}
          onClickOff={() => buttonForSingleSoundClickHandler()}
        />

        <Toggle
          label={'Лупованый звук'}
          isActiveDefault={false}
          onClickOn={() => buttonForLoopSoundClickHandler(true)}
          onClickOff={() => buttonForLoopSoundClickHandler(false)}
        />
      </div>
    </PageWrapper>
  );
};
