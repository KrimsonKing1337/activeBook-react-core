import { useEffect } from 'react';

import { nanoid } from 'nanoid';

import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

import type { BackgroundEffect } from './@types';

export const useBackground = (effect: BackgroundEffect) => {
  const dispatch = useDispatch();

  const effectWithId = {
    ...effect,
  };

  if (!effect.id) {
    effectWithId.id = nanoid();
  }

  useEffect(() => {
    dispatch(backgroundEffectsActions.setEffect(effectWithId));
  }, [effectWithId]);

  useEffect(() => {
    return () => {
      dispatch(backgroundEffectsActions.deleteEffect(effectWithId.id as string));
    };
  }, []);
};
