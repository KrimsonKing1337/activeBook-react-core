import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  route: '/',
  page: 0,
  pages: 0,
  easterEggs: 0,
  authorComments: 0,
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
    setRoute(state, action: PayloadAction<State['route']>) {
      state.route = action.payload;
    },
    setEasterEggs(state, action: PayloadAction<State['easterEggs']>) {
      state.easterEggs = action.payload;
    },
    setAuthorComments(state, action: PayloadAction<State['authorComments']>) {
      state.authorComments = action.payload;
    },

    setPages(state, action: PayloadAction<State['pages']>) {
      state.pages = action.payload;
    },
    setPage(state, action: PayloadAction<State['page']>) {
      state.page = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prevPage(_state) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nextPage(_state) {},
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
