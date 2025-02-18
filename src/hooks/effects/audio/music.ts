import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'store';
import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/audio/music';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

type UseMusicProps = {
  id?: string;
  src: string;
  loop?: boolean;
  playOnLoad?: boolean;
};

export function useMusic({ id = '', src, loop = true, playOnLoad = true }: UseMusicProps) {
  const dispatch = useDispatch();

  const musicInstances = useSelector(musicEffectsSelectors.musicInstances);

  const [musicId, setMusicId] = useState<string>(id);

  useEffect(() => {
    const uuid = id || nanoid();

    const howlInst = new HowlWrapper({
      id: uuid,
      src: [src],
      type: 'music',
      loop,
    });

    setMusicId(uuid);

    dispatch(musicEffectsActions.setMusicInstance(howlInst));
  }, []);

  useEffect(() => {
    const musicInst = musicInstances[musicId];

    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    if (playOnLoad) {
      musicInst.play();
    }

    return () => {
      musicInst.unload(true);
    };
  }, [musicInstances]);

  return musicInstances[musicId];
}
