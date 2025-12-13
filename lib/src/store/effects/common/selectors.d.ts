import type { RootState } from '../..';
export declare const selectors: {
    inverseColorIsActive: (state: RootState) => boolean;
    dotsIsActive: (state: RootState) => boolean;
    dotLottieAmount: (state: RootState) => number;
    dotLottieReadyAmount: (state: RootState) => number;
    isDotLottieLoading: (state: RootState) => boolean;
    videosCurrentTime: (state: RootState) => Record<string, number>;
};
