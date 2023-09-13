"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    isActive: false,
    color: 'red',
    speed: 1000,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/sideShadow',
    initialState: exports.initialState,
    reducers: {
        setActiveState: function (state, action) {
            state.isActive = action.payload;
        },
        setColor: function (state, action) {
            state.color = action.payload;
        },
        setSpeed: function (state, action) {
            state.speed = action.payload;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map