"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    inverseColorIsActive: false,
    dotsIsActive: false,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/common',
    initialState: exports.initialState,
    reducers: {
        setInverseColorActiveState: function (state, action) {
            state.inverseColorIsActive = action.payload;
        },
        setDotsActiveState: function (state, action) {
            state.dotsIsActive = action.payload;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map