import { RootState } from 'store/index';

export const selectors = {
  howlInst1: (state: RootState) => state.soundBgEffects.howlInst1,
  howlInst2: (state: RootState) => state.soundBgEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.soundBgEffects.lastInstIndex,
  soundInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.soundBgEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};
