import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State, VideoCurrentTime } from './@types';

export const initialState: State = {
  inverseColorIsActive: false,
  dotsIsActive: false,

  dotLottieAmount: 0,
  dotLottieReadyAmount: 0,

  imagesAmount: 0,
  imagesReadyAmount: 0,

  videosAmount: 0,
  videosReadyAmount: 0,
  videosCurrentTime: {},

  audiosAmount: 0,
  audiosReadyAmount: 0,
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

    setVideosAmount(state, action: PayloadAction<State['videosAmount']>) {
      state.videosAmount = action.payload;
    },
    setVideosReadyAmount(state, action: PayloadAction<State['videosReadyAmount']>) {
      state.dotLottieReadyAmount = action.payload;
    },
    setVideoReady() {},

    setImagesAmount(state, action: PayloadAction<State['imagesAmount']>) {
      state.imagesAmount = action.payload;
    },
    setImagesReadyAmount(state, action: PayloadAction<State['imagesReadyAmount']>) {
      state.imagesReadyAmount = action.payload;
    },
    setImageReady() {},

    setAudiosAmount(state, action: PayloadAction<State['audiosAmount']>) {
      console.log('setAudiosAmount', action.payload);

      state.audiosAmount = action.payload;
    },
    setAudiosReadyAmount(state, action: PayloadAction<State['audiosReadyAmount']>) {
      state.audiosReadyAmount = action.payload;
    },
    setAudioReady() {},
    setAudiosAmountInc(state) {
      state.audiosAmount += 1;
    },

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
