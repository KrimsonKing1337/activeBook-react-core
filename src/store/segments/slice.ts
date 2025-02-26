import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State, Segment, Segments } from './@types';

export const initialState: State = {
  segments: {},
  lastActiveId: '',
  // сколько компонентов Segment на странице было проинициализировано
  count: 0,
};

const slice = createSlice({
  name: '@segments',
  initialState,
  reducers: {
    setSegments(state, action: PayloadAction<Segments>) {
      state.segments = action.payload;
    },
    setLastActiveId(state, action: PayloadAction<string>) {
      state.lastActiveId = action.payload;
    },
    setSegmentsCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },

    incrementSegmentsCount() {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSegment(_state, _action: PayloadAction<Segment>) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeSegment(_state, _action: PayloadAction<string>) {},

    reset() {
      return initialState;
    },
  },
});

export const { reducer, actions } = slice;
