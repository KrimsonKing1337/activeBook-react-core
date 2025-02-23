import type { RootState } from 'store';

export const selectors = {
  style: (state: RootState) => state.backgroundEffects.style,
  videos: (state: RootState) => state.backgroundEffects.videos,
  images: (state: RootState) => state.backgroundEffects.images,
  Component: (state: RootState) => state.backgroundEffects.Component,
  shadow: (state: RootState) => state.backgroundEffects.shadow,
};
