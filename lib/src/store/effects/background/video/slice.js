"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    isActive: false,
    src: '',
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/background/video',
    initialState: exports.initialState,
    reducers: {
        setActiveState: function (state, action) {
            state.isActive = action.payload;
        },
        setSrc: function (state, action) {
            state.src = action.payload;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map