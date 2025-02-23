import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { State } from './@types';

export const initialState: State = {
  style: {},
  videos: [],
  images: [],
  shadow: {},
  Component: null,
};

const slice = createSlice({
  name: '@effects/background',
  initialState,
  reducers: {
    setStyle(state, action: PayloadAction<State['style']>) {
      state.style = action.payload;
    },
    setVideos(state, action: PayloadAction<State['videos']>) {
      state.videos = action.payload;
    },
    setImages(state, action: PayloadAction<State['images']>) {
      state.images = action.payload;
    },
    setComponent(state, action: PayloadAction<State['Component']>) {
      state.Component = action.payload;
    },
    setShadow(state, action: PayloadAction<State['shadow']>) {
      state.shadow = action.payload;
    },

    reset() {
      return initialState;
    },
  },
});

export const { actions, reducer } = slice;
