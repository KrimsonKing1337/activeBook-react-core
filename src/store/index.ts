import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter';

const reducer = {
  counter: counterReducer,
}

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
