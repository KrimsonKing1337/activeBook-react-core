import { RootState } from 'store/index';

export const selectors = {
  isActive: (state: RootState) => state.sideTextEffect.isActive,
  template: (state: RootState) => state.sideTextEffect.template,
  speed: (state: RootState) => state.sideTextEffect.speed,
};
