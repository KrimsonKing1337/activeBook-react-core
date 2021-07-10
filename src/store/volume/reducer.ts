import { RootState } from 'store';

import { VolumeActionsTypes } from './actionsTypes';
import { initialState, VolumeState } from './initialState';

export function volumeReducer(state = initialState, action: VolumeActionsTypes): VolumeState {
  switch (action.type) {
  case 'SET_COMMON': {
    return {
      ...state,
      common: action.payload
    }
  }
  case 'SET_BG': {
    return {
      ...state,
      bg: action.payload
    }
  }
  case 'SET_OTHER': {
    return {
      ...state,
      other: action.payload
    }
  }
  default:
    return state;
  }
}

export const volumeSelectors = {
  common: (state: RootState) => state.volume.common,
  bg: (state: RootState) => state.volume.bg,
  other: (state: RootState) => state.volume.other,
};
