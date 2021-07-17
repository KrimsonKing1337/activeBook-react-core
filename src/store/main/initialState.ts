export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface MainState {
  menuActiveState: MenuActiveState;
  bookmarksIsOpen: boolean;
}

export const initialState: MainState = {
  menuActiveState: null,
  bookmarksIsOpen: false,
};
