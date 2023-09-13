import { RootState } from 'store';

export const selectors = {
  isActive: (state: RootState) => state.backgroundVideoEffect.isActive,
  src: (state: RootState) => state.backgroundVideoEffect.src,
};
