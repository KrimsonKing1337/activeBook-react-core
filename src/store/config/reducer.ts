import { RootState } from 'store';

import { ConfigActionsTypes } from './actionsTypes';
import { ConfigState, initialState } from './initialState';

export function configReducer(state = initialState, action: ConfigActionsTypes): ConfigState {
  switch (action.type) {
  case 'SET_VOLUME': {
    const { volume } = state;

    return {
      ...state,
      volume: {
        ...volume,
        [action.payload.type]: action.payload.value
      }
    }
  }
  case 'SET_THEME':
    return {
      ...state,
      theme: action.payload
    }
  case 'SET_VIBRATION':
    return {
      ...state,
      vibration: action.payload
    }
  case 'SET_FLASHLIGHT':
    return {
      ...state,
      flashlight: action.payload
    }
  case 'SET_INVERSE_COLOR':
    return {
      ...state,
      inverseColor: action.payload
    }
  case 'SET_FONT_SIZE':
    return {
      ...state,
      fontSize: action.payload
    }
  case 'SET_LINE_SPACE':
    return {
      ...state,
      lineSpace: action.payload
    }
  default:
    return state;
  }
}

export const configSelectors = {
  volume: (state: RootState) => state.config.volume,
  theme: (state: RootState) => state.config.theme,
  vibration: (state: RootState) => state.config.vibration,
  flashlight: (state: RootState) => state.config.flashlight,
  inverseColor: (state: RootState) => state.config.inverseColor,
  fontSize: (state: RootState) => state.config.fontSize,
  lineSpace: (state: RootState) => state.config.lineSpace,
};
