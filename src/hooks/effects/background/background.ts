import { useEffect, useRef } from 'react';

import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

import type { BackgroundEffect } from './@types';

export const useBackground = (effect: BackgroundEffect) => {
  const dispatch = useDispatch();

  const effectRef = useRef<string>('');

  useEffect(() => {
    effectRef.current = effect.id;

    dispatch(backgroundEffectsActions.setEffect(effect));
  }, [effect]);

  useEffect(() => {
    return () => {
      dispatch(backgroundEffectsActions.deleteEffect(effectRef.current));
    };
  }, []);
};
