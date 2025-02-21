import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  css: '',
  video: undefined,
  img: undefined,
  shadow: undefined,
  Component: undefined,
};

const slice = createSlice({
  name: '@effects/background',
  initialState,
  reducers: {
    setCss(state, action: PayloadAction<string>) {
      state.css = action.payload;
    },
    setVideo(state, action: PayloadAction<State['video']>) {
      state.video = action.payload;
    },
    setImg(state, action: PayloadAction<State['img']>) {
      state.img = action.payload;
    },
    setShadow(state, action: PayloadAction<State['shadow']>) {
      state.shadow = action.payload;
    },
    setComponent(state, action: PayloadAction<State['Component']>) {
      state.Component = action.payload;
    },

    reset() {
      return initialState;
    },
  },
});

export const { actions, reducer } = slice;
