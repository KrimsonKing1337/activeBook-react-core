import { RootState } from 'store';
export declare const selectors: {
    achievements: (state: RootState) => Record<import("../../utils/effects/achievements/utils").Flags, boolean> | null;
    length: (state: RootState) => number;
    toastBgColor: (state: RootState) => string;
};
