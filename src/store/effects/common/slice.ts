import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  inverseColorIsActive: false,
  dotsIsActive: false,
  dotLottieAmount: 0,
  dotLottieReadyAmount: 0,
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

    setDotLottieAmount(state, action: PayloadAction<State['dotLottieAmount']>) {
      state.dotLottieAmount = action.payload;
    },
    setDotLottieReadyAmount(state, action: PayloadAction<State['dotLottieReadyAmount']>) {
      state.dotLottieReadyAmount = action.payload;
    },
    setDotLottieReady() {},
  },
});

export const { actions, reducer } = slice;
