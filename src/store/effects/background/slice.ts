import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { BackgroundEffect } from 'hooks/effects/background/@types';

import type { BackgroundEffects, State } from './@types';

export const initialState: State = {
  effects: {},
};

const slice = createSlice({
  name: '@effects/background',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setEffect(_state, _action: PayloadAction<BackgroundEffect>) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteEffect(_state, _action: PayloadAction<string>) {},

    setEffects(state, action: PayloadAction<BackgroundEffects>) {
      state.effects = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
