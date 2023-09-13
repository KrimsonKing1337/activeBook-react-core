import { RootState } from 'store';

export const selectors = {
  achievements: (state: RootState) => state.achievements.achievements,
  length: (state: RootState) => state.achievements.length,
  toastBgColor: (state: RootState) => state.achievements.toastBgColor,
};
