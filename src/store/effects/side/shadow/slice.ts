import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  isActive: false,
  color: 'red',
  speed: 1000,
};

const slice = createSlice({
  name: '@effects/sideShadow',
  initialState,
  reducers: {
    setActiveState(state, action: PayloadAction<State['isActive']>) {
      state.isActive = action.payload;
    },
    setColor(state, action: PayloadAction<State['color']>) {
      state.color = action.payload;
    },
    setSpeed(state, action: PayloadAction<State['speed']>) {
      state.speed = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
