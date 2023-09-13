"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    howlInst1: null,
    howlInst2: null,
    lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/audio/soundBg',
    initialState: exports.initialState,
    reducers: {
        setSound: function (_state, _action) {
        },
        setHowlInst1: function (state, action) {
            state.howlInst1 = action.payload;
        },
        setHowlInst2: function (state, action) {
            state.howlInst2 = action.payload;
        },
        setLastInstIndex: function (state, action) {
            state.lastInstIndex = action.payload;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map