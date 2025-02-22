import { useEffect } from 'react';

import { useDispatch } from 'store';
import { backgroundEffectActions } from 'store/effects/background';

export type UseBackgroundMediaPosition =
  'center'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type UseBackgroundMediaOptions = {
  src: string;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
};

export type UseBackgroundImgOptions = UseBackgroundMediaOptions;

export type UseBackgroundVideoOptions = UseBackgroundMediaOptions & {
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
}

export type UseBackgroundShadowOptions = {
  style?: React.CSSProperties;
};

export type UseBackgroundOptions = {
  style?: React.CSSProperties;
  img?: UseBackgroundImgOptions;
  video?: UseBackgroundVideoOptions;
  shadow?: UseBackgroundShadowOptions;
  Component?: React.ReactNode;
};

export const useBackground = ({
  style,
  img,
  video,
  shadow,
  Component,
}: UseBackgroundOptions) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(backgroundEffectActions.setStyle(style));
    dispatch(backgroundEffectActions.setImg(img));
    dispatch(backgroundEffectActions.setVideo(video));
    dispatch(backgroundEffectActions.setShadow(shadow));
    dispatch(backgroundEffectActions.setComponent(Component));

    return () => {
      dispatch(backgroundEffectActions.reset());
    };
  }, []);
};
