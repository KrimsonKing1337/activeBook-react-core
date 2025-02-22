import type { RootState } from 'store';

export const selectors = {
  style: (state: RootState) => state.backgroundEffects.style,
  video: (state: RootState) => state.backgroundEffects.video,
  img: (state: RootState) => state.backgroundEffects.img,
  shadow: (state: RootState) => state.backgroundEffects.shadow,
  Component: (state: RootState) => state.backgroundEffects.Component,
};
