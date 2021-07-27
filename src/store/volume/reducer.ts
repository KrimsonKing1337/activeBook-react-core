import { RootState } from 'store';

import { actionsTypes, VolumeActions } from './actions';
import { initialState, VolumeState } from './initialState';

export function volumeReducer(state = initialState, action: VolumeActions): VolumeState {
  switch (action.type) {
  case actionsTypes.SET_ALL: {
    return action.payload;
  }
  case actionsTypes.SET_COMMON: {
    return {
      ...state,
      common: action.payload,
    };
  }
  case actionsTypes.SET_BG: {
    return {
      ...state,
      bg: action.payload,
    };
  }
  case actionsTypes.SET_OTHER: {
    return {
      ...state,
      other: action.payload,
    };
  }
  default:
    return state;
  }
}

export const volumeSelectors = {
  all: (state: RootState) => state.volume,
  common: (state: RootState) => state.volume.common,
  bg: (state: RootState) => state.volume.bg,
  other: (state: RootState) => state.volume.other,
};
