import { RootState } from '..';
export declare const selectors: {
    location: (state: RootState) => import("history").Location | null | undefined;
    page: (state: RootState) => number;
    pages: (state: RootState) => number;
    easterEggs: (state: RootState) => number;
    authorComments: (state: RootState) => number;
    route: (state: RootState) => string;
    menuActiveState: (state: RootState) => import("./@types").MenuActiveState;
    isLoading: (state: RootState) => boolean;
    isVibrationAvailable: (state: RootState) => boolean | null;
    isFlashlightAvailable: (state: RootState) => import("./@types").FlashlightState | null;
    flashlightProblems: (state: RootState) => string;
};
