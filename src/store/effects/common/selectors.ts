import type { RootState } from 'store';

export const selectors = {
  inverseColorIsActive: (state: RootState) => state.effects.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effects.dotsIsActive,

  dotLottieAmount: (state: RootState) => state.effects.dotLottieAmount,
  dotLottieReadyAmount: (state: RootState) => state.effects.dotLottieReadyAmount,
  isDotLottieLoading: (state: RootState) => state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount,
};
