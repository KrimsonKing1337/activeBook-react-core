import { useEffect, useRef } from 'react';

import type { AudioEffectOptions } from '@types';

import { useSelector, useDispatch } from 'store';

import { mainSelectors } from 'store/main';
import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';

import { effectsActions } from 'store/effects/common';

import { HowlWrapper, type HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

export function useAudio({
  id,
  page,
  src,
  type = 'sfx',
  loop = false,
  playOnLoad = false,
  stopBy = 0,
  delay = 0,
  relativeVolume = 100,
  screamer = false,
  fadeOutWhenUnload = true,
  onPlay = () => {},
  onPause = () => {},
  onStop = () => {},
  onUnload = () => {},
}: AudioEffectOptions) {
  const dispatch = useDispatch();

  const currentPage = useSelector(mainSelectors.page);
  const isAudioUnlocked = useSelector(mainSelectors.isAudioUnlocked);
  const audioInstances = useSelector(audioEffectsSelectors.audioInstances);

  const refId = useRef('');
  const currentPageRef = useRef(0);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    /*
      Если есть или id у этого экземпляра уже есть - значит эффект не нужно инициализировать заново.
      Или если страница эффекта не соответствует текущей странице

      todo: Здесь была ещё завязка на isDeleting. Но я не смог вспомнить зачем это было нужно
    */

    if (currentPage !== page) {
      return;
    }

    if (refId.current) {
      return;
    }

    if (!isAudioUnlocked) {
      return;
    }

    const opt: HowlWrapperOptions = {
      id,
      page,
      src: [src],
      type,
      loop,
      playOnLoad,
      relativeVolume,
      screamer,
      fadeOutWhenUnload,
      stopBy,
      delay,
      onPlay,
      onPause,
      onStop,
      onUnload,
    };

    const howlWrapperInst = new HowlWrapper(opt);

    dispatch(effectsActions.setAudiosAmountInc());

    // иногда событие loaded происходит уже после смены страницы.
    // чтобы поймать актуальный номер страницы - я использую ref
    const loadedHandler = () => {
      if (currentPageRef.current !== howlWrapperInst.page) {
        return;
      }

      dispatch(effectsActions.setAudioReady());
    };

    if (howlWrapperInst.howlInst.state() === 'loaded') {
      loadedHandler();
    } else {
      const handler = () => {
        loadedHandler();
      };

      howlWrapperInst.howlInst.once('load', handler);
      howlWrapperInst.howlInst.once('loaderror', handler);
    }

    refId.current = id;

    dispatch(audioEffectsActions.setAudioInstance(howlWrapperInst));
  }, [currentPage, isAudioUnlocked]);

  useEffect(() => {
    return () => {
      dispatch(audioEffectsActions.deleteAudioInstance(refId.current));
    };
  }, []);

  return audioInstances[refId.current];
}
