import { RootState } from 'store';

import { EffectsActionsTypes } from './actionsTypes';
import { EffectsState, initialState } from './initialState';

export function effectsReducer(state = initialState, action: EffectsActionsTypes): EffectsState {
  switch (action.type) {
  case 'SET_SIDE_SHADOW_ACTIVE_STATE':
    return {
      ...state,
      sideShadowIsActive: action.payload
    };
  default:
    return state;
  }
}

export const effectsSelectors = {
  sideShadowIsActive: (state: RootState) => state.effects.sideShadowIsActive,
};
