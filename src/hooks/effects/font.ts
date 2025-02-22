import { useEffect } from 'react';

import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';

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
    dispatch(effectsActions.setFontColor(color));
    dispatch(effectsActions.setFontStyle(style));

    return () => {
      dispatch(effectsActions.resetFont());
    };
  }, [color, style]);
};
