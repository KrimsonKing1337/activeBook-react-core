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
  default:
    return state;
  }
}

export const mainSelectors = {
  menuActiveState: (state: RootState) => state.main.menuActiveState,
};
