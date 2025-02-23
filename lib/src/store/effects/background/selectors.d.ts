/// <reference types="react" />
import type { RootState } from '../..';
export declare const selectors: {
    style: (state: RootState) => import("react").CSSProperties;
    videos: (state: RootState) => import("../../../hooks/effects/background").UseBackgroundVideoOptions[];
    images: (state: RootState) => import("../../../hooks/effects/background").UseBackgroundMediaOptions[];
    Component: (state: RootState) => string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | null;
    shadow: (state: RootState) => import("../../../hooks/effects/background").UseBackgroundShadowOptions;
};
