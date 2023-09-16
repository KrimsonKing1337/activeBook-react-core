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
import { backgroundVideoEffectReducer } from './effects/background/video';
import { backgroundImgEffectReducer } from './effects/background/img';
import { soundEffectsReducer, watchSoundEffectsActions } from './effects/audio/sound';
import { soundBgEffectsReducer, watchSoundBgEffectsActions } from './effects/audio/soundBg';
import { musicEffectsReducer, watchMusicEffectsActions } from './effects/audio/music';
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
    soundEffects: soundEffectsReducer,
    soundBgEffects: soundBgEffectsReducer,
    musicEffects: musicEffectsReducer,
    sideShadowEffect: sideShadowReducer,
    sideTextEffect: sideTextReducer,
    backgroundVideoEffect: backgroundVideoEffectReducer,
    backgroundImgEffect: backgroundImgEffectReducer,
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
sagaMiddleware.run(watchSoundEffectsActions);
sagaMiddleware.run(watchSoundBgEffectsActions);
sagaMiddleware.run(watchMusicEffectsActions);
sagaMiddleware.run(watchBookmarksActions);
sagaMiddleware.run(watchSideShadowActions);
sagaMiddleware.run(watchSideTextActions);
sagaMiddleware.run(watchVolumeActions);
sagaMiddleware.run(watchCounterActions);
export var storeContext = createContext({
    store: store,
    storeState: reducer,
});
export var useStore = createStoreHook(storeContext);
export var useDispatch = createDispatchHook(storeContext);
export var useSelector = createSelectorHook(storeContext);
//# sourceMappingURL=store.js.map