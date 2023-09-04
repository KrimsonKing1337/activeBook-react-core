"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.reducer = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    count: 0,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@counter',
    initialState: exports.initialState,
    reducers: {
        setCount: function (state, action) {
            state.count = action.payload;
        },
        increment: function (_state) { },
        decrement: function (_state) { },
    },
});
exports.reducer = slice.reducer, exports.actions = slice.actions;
//# sourceMappingURL=slice.js.map