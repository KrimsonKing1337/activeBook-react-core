import { RootState } from 'store';
export declare const selectors: {
    inverseColorIsActive: (state: RootState) => boolean;
    dotsIsActive: (state: RootState) => boolean;
    fontColor: (state: RootState) => import("csstype").Property.Color | undefined;
    fontStyle: (state: RootState) => import("../../../hooks/effects/font").UseFontOptions;
};
