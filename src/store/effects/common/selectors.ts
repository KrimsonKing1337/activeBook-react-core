import { RootState } from 'store';

export const selectors = {
  inverseColorIsActive: (state: RootState) => state.effects.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effects.dotsIsActive,
};
