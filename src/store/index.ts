import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { incrementReducer, watchIncrementActions } from './increment';
import { mainReducer } from './main';
import { configReducer, watchConfigActions } from './config';
import { volumeReducer } from './volume';
import { effectsReducer } from './effects';

const sagaMiddleware = createSagaMiddleware();
const compose = composeWithDevTools(applyMiddleware(sagaMiddleware));

const rootReducer = combineReducers({
  increment: incrementReducer,
  main: mainReducer,
  config: configReducer,
  volume: volumeReducer,
  effects: effectsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose);

sagaMiddleware.run(watchIncrementActions);
sagaMiddleware.run(watchConfigActions);
