import { RootState } from 'store';

import { MainActionsTypes } from './actionsTypes';
import { initialState, MainState } from './initialState';

export function mainReducer(state = initialState, action: MainActionsTypes): MainState {
  switch (action.type) {
  case 'SET_MENU_ACTIVE_STATE':
    return {
      ...state,
      menuActiveState: action.payload
    };
  case 'SET_BOOKMARKS_IS_OPEN':
    return {
      ...state,
      bookmarksIsOpen: action.payload
    };
  case 'SET_IS_LOADING':
    return {
      ...state,
      isLoading: action.payload
    };
  default:
    return state;
  }
}

export const mainSelectors = {
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  bookmarksIsOpen: (state: RootState) => state.main.bookmarksIsOpen,
  isLoading: (state: RootState) => state.main.isLoading,
};
