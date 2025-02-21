import type { RootState } from 'store';

export const selectors = {
  color: (state: RootState) => state.backgroundEffect.color,
  css: (state: RootState) => state.backgroundEffect.css,
  video: (state: RootState) => state.backgroundEffect.video,
  img: (state: RootState) => state.backgroundEffect.img,
  shadow: (state: RootState) => state.backgroundEffect.shadow,
  Component: (state: RootState) => state.backgroundEffect.Component,
};
