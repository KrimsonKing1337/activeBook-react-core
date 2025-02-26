import { createContext } from 'react';

import {
  type ReactReduxContextValue,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';

import { mainReducer, watchMainActions } from './main';
import { configReducer, watchConfigActions } from './config';
import { volumeReducer, watchVolumeActions } from './volume';
import { effectsReducer } from './effects/common';
import { backgroundEffectsReducer, watchBackgroundEffectsActions } from './effects/background';
import { fontEffectsReducer } from './effects/font';
import { audioEffectsReducer, watchAudioEffectsActions } from './effects/audio/audio';
import { audioBgEffectsReducer, watchAudioBgEffectsActions } from './effects/audio/audioBg';
import { sideShadowReducer, watchSideShadowActions } from './effects/side/shadow';
import { sideTextReducer, watchSideTextActions } from './effects/side/text';
import { bookmarksReducer, watchBookmarksActions } from './bookmarks';
import { achievementsReducer } from './achievements';
import { segmentsReducer, watchSegmentsActions } from './segments';

import { counterReducer, watchCounterActions } from './counter';

const sagaMiddleware = createSagaMiddleware();

const reduxHistoryContextMiddleware = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const { createReduxHistory, routerMiddleware, routerReducer } = reduxHistoryContextMiddleware;

const reducer = {
  router: routerReducer,
  main: mainReducer,
  config: configReducer,
  volume: volumeReducer,
  effects: effectsReducer,
  audioEffects: audioEffectsReducer,
  audioBgEffects: audioBgEffectsReducer,
  sideShadowEffect: sideShadowReducer,
  sideTextEffect: sideTextReducer,
  backgroundEffects: backgroundEffectsReducer,
  fontEffects: fontEffectsReducer,
  bookmarks: bookmarksReducer,
  achievements: achievementsReducer,
  segments: segmentsReducer,

  counter: counterReducer,
};

const middleware = [
  sagaMiddleware,
  routerMiddleware,
];

export const store = configureStore({
  reducer,
  middleware,
});

export const history = createReduxHistory(store);

sagaMiddleware.run(watchConfigActions);
sagaMiddleware.run(watchMainActions);
sagaMiddleware.run(watchAudioEffectsActions);
sagaMiddleware.run(watchAudioBgEffectsActions);
sagaMiddleware.run(watchBookmarksActions);
sagaMiddleware.run(watchSideShadowActions);
sagaMiddleware.run(watchSideTextActions);
sagaMiddleware.run(watchVolumeActions);
sagaMiddleware.run(watchBackgroundEffectsActions);
sagaMiddleware.run(watchSegmentsActions);

sagaMiddleware.run(watchCounterActions);


export type RootState = ReturnType<typeof store.getState>;

export const storeContext = createContext<ReactReduxContextValue>({
  store,
  storeState: reducer,
});

export const useStore = createStoreHook(storeContext);
export const useDispatch = createDispatchHook(storeContext);
export const useSelector = createSelectorHook(storeContext);
