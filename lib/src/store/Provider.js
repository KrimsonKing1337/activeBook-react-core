"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var StoreProvider = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { context: store_1.storeContext, store: store_1.store, children: children }));
};
exports.StoreProvider = StoreProvider;
//# sourceMappingURL=Provider.js.map