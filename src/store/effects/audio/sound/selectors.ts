import type { RootState } from 'store';

export const selectors = {
  soundsInstances: (state: RootState) => state.soundEffects.soundInstances,

  howlInst1: (state: RootState) => state.soundEffects.howlInst1,
  howlInst2: (state: RootState) => state.soundEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.soundEffects.lastInstIndex,

  soundInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.soundEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};
