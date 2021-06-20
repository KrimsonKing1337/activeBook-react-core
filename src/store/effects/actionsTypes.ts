import { EffectsState } from './initialState';

export const actionsTypes = {
  SET_SIDE_SHADOW_ACTIVE_STATE: 'SET_SIDE_SHADOW_ACTIVE_STATE',
} as const;

export type SetSideShadowActiveState = {
  type: typeof actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE;
  payload: EffectsState['sideShadowIsActive'];
};

export function setMenuActiveState(value: SetSideShadowActiveState['payload']): SetSideShadowActiveState {
  return {
    type: actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE,
    payload: value,
  };
}

export type EffectsActionsTypes = SetSideShadowActiveState;
