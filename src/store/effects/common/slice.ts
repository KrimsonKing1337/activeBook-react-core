import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  inverseColorIsActive: false,
  dotsIsActive: false,
  fontColor: 'var(--secondary)',
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
    setFontColor(state, action: PayloadAction<State['fontColor']>) {
      state.fontColor = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
