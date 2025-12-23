import type { RootState } from 'store';

import { effectsSelectors } from 'store/effects/common';

const isLoading = (state: RootState) => {
  return state.main.isLoading
    || effectsSelectors.isDotLottieLoading(state)
    || effectsSelectors.isImagesLoading(state)
    || effectsSelectors.isVideosLoading(state);
};

export const selectors = {
  isLoading,
  showLoader: (state: RootState) => state.main.showLoader,
  isPending: (state: RootState) => state.main.isPending,
  shouldShowLoader: (state: RootState) => state.main.showLoader && isLoading(state),

  id: (state: RootState) => state.main.id,
  page: (state: RootState) => state.main.page,
  pages: (state: RootState) => state.main.pages,
  allPagesSeen: (state: RootState) => state.main.allPagesSeen,
  tableOfContents: (state: RootState) => state.main.tableOfContents,
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
  flashlightProblems: (state: RootState) => state.main.flashlightProblems,
};
