export interface EffectsState {
  sideShadowIsActive: boolean;
  sideTextIsActive: boolean;
}

export const initialState: EffectsState = {
  sideShadowIsActive: false,
  sideTextIsActive: false,
};
