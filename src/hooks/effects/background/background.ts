import { useEffect } from 'react';

import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

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
  images?: UseBackgroundImgOptions[];
  videos?: UseBackgroundVideoOptions[];
  Component?: React.ReactNode;
  shadow?: UseBackgroundShadowOptions;
};

export const useBackground = ({
  style = {},
  images = [],
  videos = [],
  Component = null,
  shadow = {},
}: UseBackgroundOptions) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(backgroundEffectsActions.setStyle(style));
    dispatch(backgroundEffectsActions.setImages(images));
    dispatch(backgroundEffectsActions.setVideos(videos));
    dispatch(backgroundEffectsActions.setComponent(Component));
    dispatch(backgroundEffectsActions.setShadow(shadow));

    return () => {
      dispatch(backgroundEffectsActions.reset());
    };
  }, []);
};
