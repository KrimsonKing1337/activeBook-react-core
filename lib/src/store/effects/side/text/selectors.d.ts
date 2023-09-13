/// <reference types="react" />
import { RootState } from '../../../index';
export declare const selectors: {
    isActive: (state: RootState) => boolean;
    template: (state: RootState) => import("react").ReactNode;
    speed: (state: RootState) => number;
};
