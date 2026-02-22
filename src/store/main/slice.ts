import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  showLoader: false,
  id: '',
  page: 0,
  pages: 0,
  authorComments: 0,
  allPagesSeen: false,
  tableOfContents: [],
  menuActiveState: null,
  isVibrationAvailable: null,
  isFlashlightAvailable: null,
  flashlightProblems: '',
};

const slice = createSlice({
  name: '@main',
  initialState,
  reducers: {
    setShowLoader(state, action: PayloadAction<State['showLoader']>) {
      state.showLoader = action.payload;
    },
    setId(state, action: PayloadAction<State['id']>) {
      state.id = action.payload;
    },
    setPage(state, action: PayloadAction<State['page']>) {
      state.page = action.payload;
    },
    setPages(state, action: PayloadAction<State['pages']>) {
      state.pages = action.payload;
    },
    setAuthorComments(state, action: PayloadAction<State['authorComments']>) {
      state.authorComments = action.payload;
    },
    setTableOfContents(state, action: PayloadAction<State['tableOfContents']>) {
      state.tableOfContents = action.payload;
    },
    setAllPagesSeen(state, action: PayloadAction<State['allPagesSeen']>) {
      state.allPagesSeen = action.payload;
    },
    setMenuActiveState(state, action: PayloadAction<State['menuActiveState']>) {
      state.menuActiveState = action.payload;
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
