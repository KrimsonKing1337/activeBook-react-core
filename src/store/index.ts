import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouterProps, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { incrementReducer, watchIncrementActions } from './increment';
import { mainReducer, watchMainActions } from './main';
import { configReducer, watchConfigActions } from './config';
import { volumeReducer } from './volume';
import { effectsReducer } from './effects';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const compose = composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)));

const makeRootReducer = (history: ConnectedRouterProps['history']) => {
  return combineReducers({
    router: connectRouter(history),
    increment: incrementReducer,
    main: mainReducer,
    config: configReducer,
    volume: volumeReducer,
    effects: effectsReducer,
  });
};

const rootReducer = makeRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose);

sagaMiddleware.run(watchIncrementActions);
sagaMiddleware.run(watchConfigActions);
sagaMiddleware.run(watchMainActions);
