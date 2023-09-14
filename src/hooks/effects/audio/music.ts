import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/audio/music';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

type UseMusicProps = {
  src: string;
  loop?: boolean;
  playOnLoad?: boolean;
};

export function useMusic({ src, loop = true, playOnLoad = true }: UseMusicProps) {
  const dispatch = useDispatch();

  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    const howlInst = new HowlWrapper({
      src: [src],
      type: 'music',
      loop,
    });

    dispatch(musicEffectsActions.setMusic(howlInst));
  }, []);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    if (playOnLoad) {
      musicInst.play();
    }

    return () => {
      musicInst.unload(true);
    };
  }, [musicInst]);

  return musicInst;
}

export function useMusicUnload() {
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    musicInst.unload();
  }, []);
}
