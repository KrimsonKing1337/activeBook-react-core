import type { RootState } from 'store';

export const selectors = {
  effects: (state: RootState) => state.backgroundEffects.effects,
};
