import { RootState } from 'store';

import { actionsTypes, ConfigActions } from './actions';
import { ConfigState, initialState } from './initialState';

export function configReducer(state = initialState, action: ConfigActions): ConfigState {
  switch (action.type) {
  case actionsTypes.SET_ALL_CONFIG:
    return action.payload;
  case actionsTypes.SET_THEME:
    return {
      ...state,
      theme: action.payload,
    };
  case actionsTypes.SET_VIBRATION:
    return {
      ...state,
      vibration: action.payload,
    };
  case actionsTypes.SET_FLASHLIGHT:
    return {
      ...state,
      flashlight: action.payload,
    };
  case actionsTypes.SET_INVERSE_COLOR:
    return {
      ...state,
      inverseColor: action.payload,
    };
  case actionsTypes.SET_FONT_SIZE:
    return {
      ...state,
      fontSize: action.payload,
    };
  case actionsTypes.SET_LINE_HEIGHT:
    return {
      ...state,
      lineHeight: action.payload,
    };
  default:
    return state;
  }
}

export const configSelectors = {
  all: (state: RootState) => state.config,
  theme: (state: RootState) => state.config.theme,
  vibration: (state: RootState) => state.config.vibration,
  flashlight: (state: RootState) => state.config.flashlight,
  inverseColor: (state: RootState) => state.config.inverseColor,
  fontSize: (state: RootState) => state.config.fontSize,
  lineHeight: (state: RootState) => state.config.lineHeight,
};
