"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelector = exports.useDispatch = exports.useStore = exports.storeContext = exports.history = exports.store = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
var redux_first_history_1 = require("redux-first-history");
var redux_saga_1 = __importDefault(require("redux-saga"));
var history_1 = require("history");
var main_1 = require("./main");
var config_1 = require("./config");
var volume_1 = require("./volume");
var common_1 = require("./effects/common");
var video_1 = require("./effects/background/video");
var img_1 = require("./effects/background/img");
var audio_1 = require("./effects/audio/audio");
var audioBg_1 = require("./effects/audio/audioBg");
var shadow_1 = require("./effects/side/shadow");
var text_1 = require("./effects/side/text");
var bookmarks_1 = require("./bookmarks");
var achievements_1 = require("./achievements");
var counter_1 = require("./counter");
var sagaMiddleware = (0, redux_saga_1.default)();
var reduxHistoryContextMiddleware = (0, redux_first_history_1.createReduxHistoryContext)({
    history: (0, history_1.createBrowserHistory)(),
});
var createReduxHistory = reduxHistoryContextMiddleware.createReduxHistory, routerMiddleware = reduxHistoryContextMiddleware.routerMiddleware, routerReducer = reduxHistoryContextMiddleware.routerReducer;
var reducer = {
    router: routerReducer,
    main: main_1.mainReducer,
    config: config_1.configReducer,
    volume: volume_1.volumeReducer,
    effects: common_1.effectsReducer,
    audioEffects: audio_1.audioEffectsReducer,
    audioBgEffects: audioBg_1.audioBgEffectsReducer,
    sideShadowEffect: shadow_1.sideShadowReducer,
    sideTextEffect: text_1.sideTextReducer,
    backgroundVideoEffect: video_1.backgroundVideoEffectReducer,
    backgroundImgEffect: img_1.backgroundImgEffectReducer,
    bookmarks: bookmarks_1.bookmarksReducer,
    achievements: achievements_1.achievementsReducer,
    counter: counter_1.counterReducer,
};
var middleware = [
    sagaMiddleware,
    routerMiddleware,
];
exports.store = (0, toolkit_1.configureStore)({
    reducer: reducer,
    middleware: middleware,
});
exports.history = createReduxHistory(exports.store);
sagaMiddleware.run(config_1.watchConfigActions);
sagaMiddleware.run(main_1.watchMainActions);
sagaMiddleware.run(audio_1.watchAudioEffectsActions);
sagaMiddleware.run(audioBg_1.watchAudioBgEffectsActions);
sagaMiddleware.run(bookmarks_1.watchBookmarksActions);
sagaMiddleware.run(shadow_1.watchSideShadowActions);
sagaMiddleware.run(text_1.watchSideTextActions);
sagaMiddleware.run(volume_1.watchVolumeActions);
sagaMiddleware.run(counter_1.watchCounterActions);
exports.storeContext = (0, react_1.createContext)({
    store: exports.store,
    storeState: reducer,
});
exports.useStore = (0, react_redux_1.createStoreHook)(exports.storeContext);
exports.useDispatch = (0, react_redux_1.createDispatchHook)(exports.storeContext);
exports.useSelector = (0, react_redux_1.createSelectorHook)(exports.storeContext);
//# sourceMappingURL=store.js.map