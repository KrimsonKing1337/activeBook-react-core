import { useEffect, useRef } from 'react';

import type { AudioEffectOptions } from '@types';

import { useSelector, useDispatch } from 'store';

import { mainSelectors } from 'store/main';
import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';

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

  const audioInstances = useSelector(audioEffectsSelectors.audioInstances);
  const currentPage = useSelector(mainSelectors.page);

  const refId = useRef('');

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

    const howlInst = new HowlWrapper(opt);

    refId.current = id;

    dispatch(audioEffectsActions.setAudioInstance(howlInst));
  }, [currentPage]);

  useEffect(() => {
    return () => {
      dispatch(audioEffectsActions.deleteAudioInstance(refId.current));
    };
  }, []);

  return audioInstances[refId.current];
}
