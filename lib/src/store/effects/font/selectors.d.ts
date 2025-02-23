import type { RootState } from '../..';
export declare const selectors: {
    color: (state: RootState) => import("csstype").Property.Color | undefined;
    style: (state: RootState) => import("../../../hooks/effects/font").UseFontOptions;
};
