import { useEffect, useRef } from 'react';

import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

import type { BackgroundEffect } from './@types';

export const useBackground = (effect: BackgroundEffect) => {
  const dispatch = useDispatch();

  const refId = useRef('');

  useEffect(() => {
    // если id уже есть - значит эффект не нужно инициализировать заново
    if (refId.current) {
      return;
    }

    refId.current = effect.id;

    dispatch(backgroundEffectsActions.setEffect(effect));
  }, [effect]);

  useEffect(() => {
    return () => {
      dispatch(backgroundEffectsActions.deleteEffect(refId.current));
    };
  }, []);
};
