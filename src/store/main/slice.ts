import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

const pages = Number(process.env.PAGES);
const easterEggs = Number(process.env.EASTER_EGGS);
const authorComments = Number(process.env.AUTHOR_COMMENTS);

export const initialState: State = {
  route: '/',
  page: 0,
  pages,
  easterEggs,
  authorComments,
  menuActiveState: null,
  isLoading: false,
  isVibrationAvailable: false,
  isFlashlightAvailable: false,
  flashlightProblems: '',
};

const slice = createSlice({
  name: '@main',
  initialState,
  reducers: {
    setRoute(state, action: PayloadAction<State['route']>) {
      state.route = action.payload;
    },
    setPage(state, action: PayloadAction<State['page']>) {
      state.page = action.payload;
    },
    prevPage(_state) {
    },
    nextPage(_state) {
    },
    setMenuActiveState(state, action: PayloadAction<State['menuActiveState']>) {
      state.menuActiveState = action.payload;
    },
    setIsLoading(state, action: PayloadAction<State['isLoading']>) {
      state.isLoading = action.payload;
    },
    setIsVibrationAvailable(state, action: PayloadAction<State['isVibrationAvailable']>) {
      state.isVibrationAvailable = action.payload;
    },
    setIsFlashlightAvailable(state, action: PayloadAction<State['isFlashlightAvailable']>) {
      state.isFlashlightAvailable = action.payload;
    },
    setFlashlightProblems(state, action: PayloadAction<State['flashlightProblems']>) {
      state.flashlightProblems = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
