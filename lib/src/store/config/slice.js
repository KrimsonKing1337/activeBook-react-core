"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    theme: 'dark',
    vibration: true,
    flashlight: true,
    authorComments: false,
    fontSize: 100,
    lineHeight: 100,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@config',
    initialState: exports.initialState,
    reducers: {
        setAll: function (_state, action) {
            return action.payload;
        },
        setTheme: function (state, action) {
            state.theme = action.payload;
        },
        setVibration: function (state, action) {
            state.vibration = action.payload;
        },
        setFlashlight: function (state, action) {
            state.flashlight = action.payload;
        },
        setAuthorComments: function (state, action) {
            state.authorComments = action.payload;
        },
        setFontSize: function (state, action) {
            state.fontSize = action.payload;
        },
        setLineHeight: function (state, action) {
            state.lineHeight = action.payload;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map