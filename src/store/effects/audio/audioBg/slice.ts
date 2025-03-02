import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { HowlInst, HowlInstances } from '@types';

import type { State } from './@types';

export const initialState: State = {
  audioInstances: {},
  isDeleting: false,
};

const slice = createSlice({
  name: '@effects/audioBg',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setAudioInstance(_state, _action: PayloadAction<HowlInst>) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteAudioInstance(_state, _action: PayloadAction<string>) {},

    setAudioInstances(state, action: PayloadAction<HowlInstances>) {
      state.audioInstances = action.payload;
    },
    setIsDeleting(state, action: PayloadAction<boolean>) {
      state.isDeleting = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
