import { createContext } from 'react';
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
var reducer = {
    counter: counterReducer,
};
export var store = configureStore({
    reducer: reducer,
});
export var storeContext = createContext({
    store: store,
    storeState: reducer,
});
export var useStore = createStoreHook(storeContext);
export var useDispatch = createDispatchHook(storeContext);
export var useSelector = createSelectorHook(storeContext);
//# sourceMappingURL=store.js.map