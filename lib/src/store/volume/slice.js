"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.reducer = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    global: 100,
    bg: 100,
    sfx: 100,
    music: 100,
    videos: 100,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@volume',
    initialState: exports.initialState,
    reducers: {
        setAll: function (_state, action) {
            return action.payload;
        },
        setGlobal: function (state, action) {
            state.global = action.payload;
        },
        setBg: function (state, action) {
            state.bg = action.payload;
        },
        setSfx: function (state, action) {
            state.sfx = action.payload;
        },
        setMusic: function (state, action) {
            state.music = action.payload;
        },
        setVideos: function (state, action) {
            state.videos = action.payload;
        },
    },
});
exports.reducer = slice.reducer, exports.actions = slice.actions;
//# sourceMappingURL=slice.js.map