import { RootState } from 'store';

export const selectors = {
  isActive: (state: RootState) => state.backgroundImgEffect.isActive,
  src: (state: RootState) => state.backgroundImgEffect.src,
};
