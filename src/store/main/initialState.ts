export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface MainState {
  menuActiveState: MenuActiveState;
  bookmarksIsOpen: boolean;
  isLoading: boolean;
  isVibrationAvailable: boolean;
  isFlashlightAvailable: boolean;
}

export const initialState: MainState = {
  menuActiveState: null,
  bookmarksIsOpen: false,
  isLoading: false,
  isVibrationAvailable: false,
  isFlashlightAvailable: false,
};
