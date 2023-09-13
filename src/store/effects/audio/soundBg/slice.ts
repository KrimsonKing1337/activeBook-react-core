import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HowlInst, LastInstIndex, State } from './@types';

export const initialState: State = {
  howlInst1: null,
  howlInst2: null,
  lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};

const slice = createSlice({
  name: '@effects/audio/soundBg',
  initialState,
  reducers: {
    setSound(_state, _action: PayloadAction<HowlInst>) {
    },
    setHowlInst1(state, action: PayloadAction<HowlInst>) {
      state.howlInst1 = action.payload;
    },
    setHowlInst2(state, action: PayloadAction<HowlInst>) {
      state.howlInst2 = action.payload;
    },
    setLastInstIndex(state, action: PayloadAction<LastInstIndex>) {
      state.lastInstIndex = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
