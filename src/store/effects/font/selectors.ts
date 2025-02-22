import type { RootState } from 'store';

export const selectors = {
  color: (state: RootState) => state.fontEffects.color,
  style: (state: RootState) => state.fontEffects.style,
};
