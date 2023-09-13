export type MenuActiveState = null | 'menu' | 'tableOfContents' | 'achievementsProgress';
export type FlashlightState = false | 'js' | 'cordova';
export interface State {
    route: string;
    page: number;
    pages: number;
    easterEggs: number;
    authorComments: number;
    menuActiveState: MenuActiveState;
    isLoading: boolean;
    isVibrationAvailable: boolean;
    isFlashlightAvailable: FlashlightState;
    flashlightProblems: string;
}
