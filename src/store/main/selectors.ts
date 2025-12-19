import type { RootState } from 'store';

const isDotLottieLoading = (state: RootState) => state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount;

export const selectors = {
  id: (state: RootState) => state.main.id,
  page: (state: RootState) => state.main.page,
  pages: (state: RootState) => state.main.pages,
  allPagesSeen: (state: RootState) => state.main.allPagesSeen,
  tableOfContents: (state: RootState) => state.main.tableOfContents,
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  isLoading: (state: RootState) => state.main.isLoading || isDotLottieLoading(state),
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
  flashlightProblems: (state: RootState) => state.main.flashlightProblems,
};
