import { RootState } from 'store';

import { actionsTypes, MainActions } from './actions';
import { initialState, MainState } from './initialState';

export function mainReducer(state = initialState, action: MainActions): MainState {
  switch (action.type) {
  case actionsTypes.SET_MENU_ACTIVE_STATE:
    return {
      ...state,
      menuActiveState: action.payload,
    };
  case actionsTypes.SET_BOOKMARKS_IS_OPEN:
    return {
      ...state,
      bookmarksIsOpen: action.payload,
    };
  case actionsTypes.SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload,
    };
  case actionsTypes.SET_IS_VIBRATION_AVAILABLE:
    return {
      ...state,
      isVibrationAvailable: action.payload,
    };
  case actionsTypes.SET_IS_FLASHLIGHT_AVAILABLE:
    return {
      ...state,
      isFlashlightAvailable: action.payload,
    };
  default:
    return state;
  }
}

export const mainSelectors = {
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  bookmarksIsOpen: (state: RootState) => state.main.bookmarksIsOpen,
  isLoading: (state: RootState) => state.main.isLoading,
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
};
