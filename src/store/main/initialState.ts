export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface MainState {
  menuActiveState: MenuActiveState;
}

export const initialState: MainState = {
  menuActiveState: null,
};
