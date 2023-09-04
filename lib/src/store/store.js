"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelector = exports.useDispatch = exports.useStore = exports.storeContext = exports.store = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
var counter_1 = require("./counter");
var reducer = {
    counter: counter_1.counterReducer,
};
exports.store = (0, toolkit_1.configureStore)({
    reducer: reducer,
});
exports.storeContext = (0, react_1.createContext)({
    store: exports.store,
    storeState: reducer,
});
exports.useStore = (0, react_redux_1.createStoreHook)(exports.storeContext);
exports.useDispatch = (0, react_redux_1.createDispatchHook)(exports.storeContext);
exports.useSelector = (0, react_redux_1.createSelectorHook)(exports.storeContext);
//# sourceMappingURL=store.js.map