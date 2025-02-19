import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HowlInst, HowlInstances, LastInstIndex, State } from './@types';

export const initialState: State = {
  audioInstances: {},

  howlInst1: null,
  howlInst2: null,
  lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};

const slice = createSlice({
  name: '@effects/audio/sound',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setAudioInstance(_state, _action: PayloadAction<HowlInst>) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteAudioInstance(_state, _action: PayloadAction<string>) {},

    setAudioInstances(state, action: PayloadAction<HowlInstances>) {
      state.audioInstances = action.payload;
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
