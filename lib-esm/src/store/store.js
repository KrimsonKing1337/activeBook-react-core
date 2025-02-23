import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook, } from 'react-redux';
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
import { counterReducer, watchCounterActions } from './counter';
var sagaMiddleware = createSagaMiddleware();
var reduxHistoryContextMiddleware = createReduxHistoryContext({
    history: createBrowserHistory(),
});
var createReduxHistory = reduxHistoryContextMiddleware.createReduxHistory, routerMiddleware = reduxHistoryContextMiddleware.routerMiddleware, routerReducer = reduxHistoryContextMiddleware.routerReducer;
var reducer = {
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
    counter: counterReducer,
};
var middleware = [
    sagaMiddleware,
    routerMiddleware,
];
export var store = configureStore({
    reducer: reducer,
    middleware: middleware,
});
export var history = createReduxHistory(store);
sagaMiddleware.run(watchConfigActions);
sagaMiddleware.run(watchMainActions);
sagaMiddleware.run(watchAudioEffectsActions);
sagaMiddleware.run(watchAudioBgEffectsActions);
sagaMiddleware.run(watchBookmarksActions);
sagaMiddleware.run(watchSideShadowActions);
sagaMiddleware.run(watchSideTextActions);
sagaMiddleware.run(watchVolumeActions);
sagaMiddleware.run(watchBackgroundEffectsActions);
sagaMiddleware.run(watchCounterActions);
export var storeContext = createContext({
    store: store,
    storeState: reducer,
});
export var useStore = createStoreHook(storeContext);
export var useDispatch = createDispatchHook(storeContext);
export var useSelector = createSelectorHook(storeContext);
//# sourceMappingURL=store.js.map