import { useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';

import type { AudioEffectOptions } from '@types';

import { useSelector, useDispatch } from 'store';

import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';

import { HowlWrapper, type HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

export function useAudio({
  id = '',
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

  const audioIdRef = useRef(id);

  useEffect(() => {
    if (isDeleting) {
      return;
    }

    const uuid = id || nanoid();

    const opt: HowlWrapperOptions = {
      id: uuid,
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

    audioIdRef.current = uuid;

    dispatch(audioEffectsActions.setAudioInstance(howlInst));
  }, [isDeleting]);

  useEffect(() => {
    return () => {
      dispatch(audioEffectsActions.deleteAudioInstance(audioIdRef.current));
    };
  }, []);

  return audioInstances[audioIdRef.current];
}
