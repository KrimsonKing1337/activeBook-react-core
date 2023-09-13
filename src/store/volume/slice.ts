import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  global: 100,
  bg: 100,
  sfx: 100,
  music: 100,
};

const slice = createSlice({
  name: '@volume',
  initialState,
  reducers: {
    setAll(_state, action: PayloadAction<State>) {
      return action.payload;
    },
    setGlobal(state, action: PayloadAction<State['global']>) {
      state.global = action.payload;
    },
    setBg(state, action: PayloadAction<State['bg']>) {
      state.bg = action.payload;
    },
    setSfx(state, action: PayloadAction<State['sfx']>) {
      state.sfx = action.payload;
    },
    setMusic(state, action: PayloadAction<State['music']>) {
      state.music = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
