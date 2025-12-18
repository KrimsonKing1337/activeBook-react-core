import type { RootState } from 'store';

const isDotLottieLoading = (state: RootState) => state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount;

export const selectors = {
  page: (state: RootState) => state.main.page,
  pages: (state: RootState) => state.main.pages,
  allPagesSeen: (state: RootState) => state.main.allPagesSeen,
  tableOfContents: (state: RootState) => state.main.tableOfContents,
  route: (state: RootState) => state.main.route,
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  isLoading: (state: RootState) => state.main.isLoading || isDotLottieLoading(state),
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
  flashlightProblems: (state: RootState) => state.main.flashlightProblems,
};
