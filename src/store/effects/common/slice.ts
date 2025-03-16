import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State, VideoCurrentTime } from './@types';

export const initialState: State = {
  inverseColorIsActive: false,
  dotsIsActive: false,

  dotLottieAmount: 0,
  dotLottieReadyAmount: 0,

  videosCurrentTime: {},
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

    setVideoCurrentTime(state, action: PayloadAction<VideoCurrentTime>) {
      const { id, currentTime } = action.payload;

      state.videosCurrentTime = {
        ...state.videosCurrentTime,
        [id]: currentTime,
      };
    },
    setVideosCurrentTime(state, action: PayloadAction<State['videosCurrentTime']>) {
      state.videosCurrentTime = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
