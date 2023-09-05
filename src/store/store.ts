import { createContext } from 'react';

import {
  type ReactReduxContextValue,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import { counterReducer, watchCounterActions } from './counter';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  counter: counterReducer,
};

const middleware = [
  sagaMiddleware,
];

export const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(watchCounterActions);

export type RootState = ReturnType<typeof store.getState>;

export const storeContext = createContext<ReactReduxContextValue>({
  store,
  storeState: reducer,
});

export const useStore = createStoreHook(storeContext);
export const useDispatch = createDispatchHook(storeContext);
export const useSelector = createSelectorHook(storeContext);
