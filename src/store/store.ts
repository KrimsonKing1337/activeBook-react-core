import { createContext } from 'react';

import {
  type ReactReduxContextValue,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter';

const reducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const storeContext = createContext<ReactReduxContextValue>({
  store,
  storeState: reducer,
});

export const useStore = createStoreHook(storeContext);
export const useDispatch = createDispatchHook(storeContext);
export const useSelector = createSelectorHook(storeContext);
