import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { State } from './@types';

export const initialState: State = {
  color: 'var(--secondary)',
  style: {},
};

const slice = createSlice({
  name: '@effects/font',
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<State['color']>) {
      state.color = action.payload;
    },
    setStyle(state, action: PayloadAction<State['style']>) {
      state.style = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const { actions, reducer } = slice;
