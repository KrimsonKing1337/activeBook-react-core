"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    color: 'var(--secondary)',
    style: {},
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/font',
    initialState: exports.initialState,
    reducers: {
        setColor: function (state, action) {
            state.color = action.payload;
        },
        setStyle: function (state, action) {
            state.style = action.payload;
        },
        reset: function () {
            return exports.initialState;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map