import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  inverseColorIsActive: false,
  dotsIsActive: false,
  fontColor: 'var(--secondary)',
  fontStyle: {},
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
    setFontStyle(state, action: PayloadAction<State['fontStyle']>) {
      state.fontStyle = action.payload;
    },
    resetFont(state) {
      const { fontColor, fontStyle } = initialState;

      state.fontColor = fontColor;
      state.fontStyle = fontStyle;
    },
  },
});

export const { actions, reducer } = slice;
