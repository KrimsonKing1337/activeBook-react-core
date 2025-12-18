import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  route: '/',
  page: 0,
  pages: 0,
  allPagesSeen: false,
  tableOfContents: [],
  menuActiveState: null,
  isLoading: false,
  isVibrationAvailable: null,
  isFlashlightAvailable: null,
  flashlightProblems: '',
};

const slice = createSlice({
  name: '@main',
  initialState,
  reducers: {
    setPages(state, action: PayloadAction<State['pages']>) {
      state.pages = action.payload;
    },
    setTableOfContents(state, action: PayloadAction<State['tableOfContents']>) {
      state.tableOfContents = action.payload;
    },
    setAllPagesSeen(state, action: PayloadAction<State['allPagesSeen']>) {
      state.allPagesSeen = action.payload;
    },

    setPage(state, action: PayloadAction<State['page']>) {
      state.page = action.payload;
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
