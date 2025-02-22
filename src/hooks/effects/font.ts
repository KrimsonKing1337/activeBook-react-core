import { useEffect } from 'react';

import { useDispatch } from 'store';
import { fontEffectsActions } from 'store/effects/font';

export type UseFontOptions = Pick<React.CSSProperties, 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontSizeAdjust'
  | 'fontStretch'
  | 'fontStyle'
  | 'fontVariant'
  | 'fontWeight'
>;

export const useFont = ({ color = 'var(--secondary)', ...style }: UseFontOptions) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fontEffectsActions.setColor(color));
    dispatch(fontEffectsActions.setStyle(style));

    return () => {
      dispatch(fontEffectsActions.reset());
    };
  }, [color, style]);
};
