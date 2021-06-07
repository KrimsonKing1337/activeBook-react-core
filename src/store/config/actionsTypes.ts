import { ConfigState, VolumeKeys } from './initialState';

export const actionsTypes = {
  SET_VOLUME: 'SET_VOLUME',
  SET_THEME: 'SET_THEME',
  SET_VIBRATION: 'SET_VIBRATION',
  SET_FLASHLIGHT: 'SET_FLASHLIGHT',
  SET_INVERSE_COLOR: 'SET_INVERSE_COLOR',
  SET_FONT_SIZE: 'SET_FONT_SIZE',
  SET_LINE_SPACE: 'SET_LINE_SPACE',
} as const;

export type VolumePayload = {
  type: VolumeKeys,
  value: number;
};

export type SetVolume = {
  type: typeof actionsTypes.SET_VOLUME;
  payload: VolumePayload;
};

export function setVolume(value: SetVolume['payload']): SetVolume {
  return {
    type: actionsTypes.SET_VOLUME,
    payload: value,
  };
}

export type SetTheme = {
  type: typeof actionsTypes.SET_THEME;
  payload: ConfigState['theme'];
}

export function setTheme(value: SetTheme['payload']): SetTheme {
  return {
    type: actionsTypes.SET_THEME,
    payload: value,
  }
}

export type SetVibration = {
  type: typeof actionsTypes.SET_VIBRATION;
  payload: ConfigState['vibration'];
}

export function setVibration(value: SetVibration['payload']): SetVibration {
  return {
    type: actionsTypes.SET_VIBRATION,
    payload: value,
  }
}

export type SetFlashlight = {
  type: typeof actionsTypes.SET_FLASHLIGHT;
  payload: ConfigState['flashlight'];
}

export function setFlashlight(value: SetFlashlight['payload']): SetFlashlight {
  return {
    type: actionsTypes.SET_FLASHLIGHT,
    payload: value,
  }
}

export type SetInverseColor = {
  type: typeof actionsTypes.SET_INVERSE_COLOR;
  payload: ConfigState['inverseColor'];
}

export function setInverseColor(value: SetInverseColor['payload']): SetInverseColor {
  return {
    type: actionsTypes.SET_INVERSE_COLOR,
    payload: value,
  }
}

export type SetFontSize = {
  type: typeof actionsTypes.SET_FONT_SIZE;
  payload: ConfigState['fontSize'];
}

export function setFontSize(value: SetFontSize['payload']): SetFontSize {
  return {
    type: actionsTypes.SET_FONT_SIZE,
    payload: value,
  }
}

export type SetLineSpace = {
  type: typeof actionsTypes.SET_LINE_SPACE;
  payload: ConfigState['lineSpace'];
}

export type ConfigActionsTypes = SetVolume
  | SetTheme
  | SetVibration
  | SetFlashlight
  | SetInverseColor
  | SetFontSize
  | SetLineSpace;
