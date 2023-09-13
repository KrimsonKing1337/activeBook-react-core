import { RootState } from 'store';

export const selectors = {
  all: (state: RootState) => state.volume,
  global: (state: RootState) => state.volume.global,
  bg: (state: RootState) => state.volume.bg,
  sfx: (state: RootState) => state.volume.sfx,
  music: (state: RootState) => state.volume.music,
};
