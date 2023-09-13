import { RootState } from 'store/index';

export const selectors = {
  howlInst1: (state: RootState) => state.musicEffects.howlInst1,
  howlInst2: (state: RootState) => state.musicEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.musicEffects.lastInstIndex,
  musicInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.musicEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};
