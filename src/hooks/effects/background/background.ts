import { useEffect, useRef } from 'react';

import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

import type { BackgroundEffect } from './@types';

export const useBackground = (effect: BackgroundEffect) => {
  const dispatch = useDispatch();

  const refEffect = useRef<BackgroundEffect | null>(null);

  useEffect(() => {
    // если эффект уже есть, и он точно такой же, как тот, что приходит - значит эффект не нужно инициализировать заново
    if (refEffect.current?.id === effect.id) {
      return;
    }

    refEffect.current = effect;

    dispatch(backgroundEffectsActions.setEffect(effect));
  }, [effect]);

  useEffect(() => {
    return () => {
      if (!refEffect.current) {
        return;
      }

      dispatch(backgroundEffectsActions.deleteEffect(refEffect.current.id));
    };
  }, []);
};
