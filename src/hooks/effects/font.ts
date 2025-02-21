import { useEffect } from 'react';

import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';

// todo: добавить размер, изменение шрифта и т.д.
export type UseFontOptions = {
  color?: string;
};

export const useFont = ({ color = 'var(--secondary)' }: UseFontOptions) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effectsActions.setFontColor(color));

    return () => {
      dispatch(effectsActions.setFontColor('var(--secondary)'));
    };
  }, []);
};
