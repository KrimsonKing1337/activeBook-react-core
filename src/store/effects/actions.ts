import { EffectsState } from './initialState';

export const actionsTypes = {
  SET_SIDE_SHADOW_ACTIVE_STATE: 'SET_SIDE_SHADOW_ACTIVE_STATE',
  SET_SIDE_TEXT_ACTIVE_STATE: 'SET_SIDE_TEXT_ACTIVE_STATE',
  SET_BACKGROUND_VIDEO_ACTIVE_STATE: 'SET_BACKGROUND_VIDEO_ACTIVE_STATE',
  SET_BACKGROUND_IMG_ACTIVE_STATE: 'SET_BACKGROUND_IMG_ACTIVE_STATE',
  SET_INVERSE_COLOR_ACTIVE_STATE: 'SET_INVERSE_COLOR_ACTIVE_STATE',
  SET_DOTS_ACTIVE_STATE: 'SET_DOTS_ACTIVE_STATE',
} as const;

export type SetSideShadowActiveState = {
  type: typeof actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE;
  payload: EffectsState['sideShadowIsActive'];
};

export function setSideShadowActiveState(value: SetSideShadowActiveState['payload']): SetSideShadowActiveState {
  return {
    type: actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE,
    payload: value,
  };
}

export type SetSideTextActiveState = {
  type: typeof actionsTypes.SET_SIDE_TEXT_ACTIVE_STATE;
  payload: EffectsState['sideTextIsActive'];
};

export function setSideTextActiveState(value: SetSideTextActiveState['payload']): SetSideTextActiveState {
  return {
    type: actionsTypes.SET_SIDE_TEXT_ACTIVE_STATE,
    payload: value,
  };
}

export type SetBackgroundVideoActiveState = {
  type: typeof actionsTypes.SET_BACKGROUND_VIDEO_ACTIVE_STATE;
  payload: EffectsState['backgroundVideoIsActive'];
};

export function setBackgroundVideoActiveState(value: SetBackgroundVideoActiveState['payload']): SetBackgroundVideoActiveState {
  return {
    type: actionsTypes.SET_BACKGROUND_VIDEO_ACTIVE_STATE,
    payload: value,
  };
}

export type SetBackgroundImgActiveState = {
  type: typeof actionsTypes.SET_BACKGROUND_IMG_ACTIVE_STATE;
  payload: EffectsState['backgroundImgIsActive'];
};

export function setBackgroundImgActiveState(value: SetBackgroundVideoActiveState['payload']): SetBackgroundImgActiveState {
  return {
    type: actionsTypes.SET_BACKGROUND_IMG_ACTIVE_STATE,
    payload: value,
  };
}

export type SetInverseColorActiveState = {
  type: typeof actionsTypes.SET_INVERSE_COLOR_ACTIVE_STATE;
  payload: EffectsState['inverseColorIsActive'];
};

export function setInverseColorActiveState(value: SetInverseColorActiveState['payload']): SetInverseColorActiveState {
  return {
    type: actionsTypes.SET_INVERSE_COLOR_ACTIVE_STATE,
    payload: value,
  };
}

export type SetDotsActiveState = {
  type: typeof actionsTypes.SET_DOTS_ACTIVE_STATE;
  payload: EffectsState['dotsIsActive'];
};

export function setDotsActiveState(value: SetDotsActiveState['payload']): SetDotsActiveState {
  return {
    type: actionsTypes.SET_DOTS_ACTIVE_STATE,
    payload: value,
  };
}

export type EffectsActions = SetSideShadowActiveState
  | SetSideTextActiveState
  | SetBackgroundVideoActiveState
  | SetBackgroundImgActiveState
  | SetInverseColorActiveState
  | SetDotsActiveState;
