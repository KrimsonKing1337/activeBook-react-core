import { useEffect, useState } from 'react';

import { RangeEffectsJson, AudioRangeEffect, Timer } from '@types';

import { useDispatch, useSelector } from 'store';
import { soundBgEffectsActions, soundBgEffectsSelectors } from 'store/effects/audio/soundBg';
import { mainSelectors } from 'store/main';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';

export function useAudioInRange(effects: RangeEffectsJson) {
  const dispatch = useDispatch();

  const [soundInRange, setSoundInRange] = useState<AudioRangeEffect | null>(null);

  const page = useSelector(mainSelectors.page);
  const soundInst = useSelector(soundBgEffectsSelectors.soundInst);

  useEffect(() => {
    const soundOnPage = getEffectInRange(effects as any, page, 'bg') as AudioRangeEffect;

    if (!soundOnPage) {
      soundInst?.unload(true);

      setSoundInRange(null);
      dispatch(soundBgEffectsActions.setSound(null));

      return;
    }

    setSoundInRange(soundOnPage);

    const { src, id } = soundOnPage;

    if (soundInst?.id === id) {
      return;
    }

    const howlInst = new HowlWrapper({
      id,
      src: [src],
      type: 'bg',
      loop: true,
    });

    dispatch(soundBgEffectsActions.setSound(howlInst));
  }, [page]);

  useEffect(() => {
    if (!soundInst || soundInst.isUnloading) {
      return;
    }

    if (soundInst?.id === soundInRange?.id && soundInst.playing()) {
      return;
    }

    let timer: Timer = null;

    const delay = soundInRange?.delay || 0;

    timer = setTimeout(() => {
      soundInst.play();
    }, delay);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [soundInst, soundInRange]);

  return soundInst;
}

export function useAudioInRangeUnload() {
  const soundInst = useSelector(soundBgEffectsSelectors.soundInst);

  useEffect(() => {
    if (!soundInst || soundInst.isUnloading) {
      return;
    }

    soundInst.unload();
  }, []);
}
