import { useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';

import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

import type { BackgroundEffect } from './@types';

export const useBackground = (effect: BackgroundEffect) => {
  const dispatch = useDispatch();

  const effectRef = useRef<string>('');

  useEffect(() => {
    const effectWithId = {
      ...effect,
    };

    if (!effect.id) {
      effectWithId.id = nanoid();
    }

    effectRef.current = effectWithId.id as string;

    dispatch(backgroundEffectsActions.setEffect(effectWithId));
  }, [effect]);

  useEffect(() => {
    return () => {
      dispatch(backgroundEffectsActions.deleteEffect(effectRef.current as string));
    };
  }, []);
};
