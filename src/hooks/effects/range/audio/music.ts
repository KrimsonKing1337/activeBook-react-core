import { useEffect, useState } from 'react';

import { RangeEffectsJson, AudioRangeEffect } from '@types';

import { useDispatch, useSelector } from 'store';
import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/audio/music';
import { mainSelectors } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';

export function useMusicInRange(effects: RangeEffectsJson) {
  const dispatch = useDispatch();

  const [musicInRange, setMusicInRange] = useState<AudioRangeEffect | null>(null);

  const page = useSelector(mainSelectors.page);
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    const musicOnPage = getEffectInRange(effects, page, 'music') as AudioRangeEffect;

    if (!musicOnPage) {
      musicInst?.unload(true);

      setMusicInRange(null);
      dispatch(musicEffectsActions.setMusic(null));

      return;
    }

    setMusicInRange(musicOnPage);

    const { src, id } = musicOnPage;

    if (musicInst?.id === id) {
      if (!musicInst?.playing()) {
        musicInst?.play();
      }

      return;
    }

    const howlInst = new HowlWrapper({
      id,
      src: [src],
      type: 'music',
      loop: true,
    });

    dispatch(musicEffectsActions.setMusic(howlInst));
  }, [page]);

  useEffect(() => {
    if (!musicInRange) {
      return;
    }

    if (!musicInst || musicInst.isUnloading) {
      if (musicInst?.state() !== 'unloaded') {
        return;
      }
    }

    if (musicInst?.id === musicInRange?.id && musicInst.playing()) {
      return;
    }

    musicInst.play();
  }, [musicInst, musicInRange]);

  return musicInRange;
}

export function useMusicInRangeUnload() {
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    musicInst.unload();
  }, []);
}
