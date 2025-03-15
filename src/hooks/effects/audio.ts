import { useEffect, useRef } from 'react';

import type { AudioEffectOptions } from '@types';

import { useSelector, useDispatch } from 'store';

import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';

import { HowlWrapper, type HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

export function useAudio({
  id,
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
  const isDeleting = useSelector(audioEffectsSelectors.isDeleting);

  const refId = useRef('');

  useEffect(() => {
    // если удаляется или id уже есть - значит эффект не нужно инициализировать заново
    if (isDeleting || refId.current) {
      return;
    }

    const opt: HowlWrapperOptions = {
      id,
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
  }, [isDeleting]);

  useEffect(() => {
    return () => {
      dispatch(audioEffectsActions.deleteAudioInstance(refId.current));
    };
  }, []);

  return audioInstances[refId.current];
}
