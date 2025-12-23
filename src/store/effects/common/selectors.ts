import type { RootState } from 'store';

export const selectors = {
  inverseColorIsActive: (state: RootState) => state.effects.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effects.dotsIsActive,

  dotLottieAmount: (state: RootState) => state.effects.dotLottieAmount,
  dotLottieReadyAmount: (state: RootState) => state.effects.dotLottieReadyAmount,
  isDotLottieLoading: (state: RootState) => state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount,

  imagesAmount: (state: RootState) => state.effects.imagesAmount,
  imagesReadyAmount: (state: RootState) => state.effects.imagesReadyAmount,
  isImagesLoading: (state: RootState) => state.effects.imagesAmount !== state.effects.imagesReadyAmount,

  videosAmount: (state: RootState) => state.effects.videosAmount,
  videosReadyAmount: (state: RootState) => state.effects.videosReadyAmount,
  isVideosLoading: (state: RootState) => state.effects.videosAmount !== state.effects.videosReadyAmount,

  videosCurrentTime: (state: RootState) => state.effects.videosCurrentTime,
};
