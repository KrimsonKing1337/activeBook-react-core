import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  isActive: false,
  src: '',
};

const slice = createSlice({
  name: '@effects/background/img',
  initialState,
  reducers: {
    setActiveState(state, action: PayloadAction<State['isActive']>) {
      state.isActive = action.payload;
    },
    setSrc(state, action: PayloadAction<State['src']>) {
      state.src = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
