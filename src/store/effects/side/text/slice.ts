import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  isActive: false,
  template: null,
  speed: 60000,
};

const slice = createSlice({
  name: '@effects/sideText',
  initialState,
  reducers: {
    setActiveState(state, action: PayloadAction<State['isActive']>) {
      state.isActive = action.payload;
    },
    setTemplate(state, action: PayloadAction<State['template']>) {
      state.template = action.payload;
    },
    setSpeed(state, action: PayloadAction<State['speed']>) {
      state.speed = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
