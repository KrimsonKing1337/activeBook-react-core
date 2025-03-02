import type { RootState } from 'store';

export const selectors = {
  audioInstances: (state: RootState) => state.audioBgEffects.audioInstances,
  isDeleting: (state: RootState) => state.audioBgEffects.isDeleting,
};
