import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    theme: 'dark',
    vibration: true,
    flashlight: true,
    authorComments: false,
    fontSize: 100,
    lineHeight: 100,
};
var slice = createSlice({
    name: '@config',
    initialState: initialState,
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
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map