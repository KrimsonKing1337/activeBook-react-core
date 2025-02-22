import { RootState } from 'store';

export const selectors = {
  inverseColorIsActive: (state: RootState) => state.effects.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effects.dotsIsActive,
  fontColor: (state: RootState) => state.effects.fontColor,
  fontStyle: (state: RootState) => state.effects.fontStyle,
};
