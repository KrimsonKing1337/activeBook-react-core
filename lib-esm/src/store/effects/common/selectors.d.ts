import type { RootState } from 'store';
export declare const selectors: {
    inverseColorIsActive: (state: RootState) => boolean;
    dotsIsActive: (state: RootState) => boolean;
    dotLottieAmount: (state: RootState) => number;
    dotLottieReadyAmount: (state: RootState) => number;
    isDotLottieLoading: (state: RootState) => boolean;
};
