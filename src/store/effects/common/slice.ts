import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  inverseColorIsActive: false,
  dotsIsActive: false,
};

const slice = createSlice({
  name: '@effects/common',
  initialState,
  reducers: {
    setInverseColorActiveState(state, action: PayloadAction<State['inverseColorIsActive']>) {
      state.inverseColorIsActive = action.payload;
    },
    setDotsActiveState(state, action: PayloadAction<State['dotsIsActive']>) {
      state.dotsIsActive = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
