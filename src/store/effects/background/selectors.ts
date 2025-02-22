import type { RootState } from 'store';

export const selectors = {
  style: (state: RootState) => state.backgroundEffect.style,
  video: (state: RootState) => state.backgroundEffect.video,
  img: (state: RootState) => state.backgroundEffect.img,
  shadow: (state: RootState) => state.backgroundEffect.shadow,
  Component: (state: RootState) => state.backgroundEffect.Component,
};
