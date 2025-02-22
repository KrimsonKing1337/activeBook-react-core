/// <reference types="react" />
import type { RootState } from '../..';
export declare const selectors: {
    style: (state: RootState) => import("react").CSSProperties | undefined;
    video: (state: RootState) => import("../../../hooks/effects/background").UseBackgroundVideoOptions | undefined;
    img: (state: RootState) => import("../../../hooks/effects/background").UseBackgroundMediaOptions | undefined;
    shadow: (state: RootState) => import("../../../hooks/effects/background").UseBackgroundShadowOptions | undefined;
    Component: (state: RootState) => import("react").ReactNode;
};
