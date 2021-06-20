export interface EffectsState {
  sideShadowIsActive: boolean;
  sideTextIsActive: boolean;
  backgroundVideoIsActive: boolean;
  backgroundImgIsActive: boolean;
  inverseColorIsActive: boolean;
  dotsIsActive: boolean;
}

export const initialState: EffectsState = {
  sideShadowIsActive: false,
  sideTextIsActive: false,
  backgroundVideoIsActive: false,
  backgroundImgIsActive: false,
  inverseColorIsActive: false,
  dotsIsActive: false,
};
