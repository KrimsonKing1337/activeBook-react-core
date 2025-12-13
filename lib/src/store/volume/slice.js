import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    global: 100,
    bg: 100,
    sfx: 100,
    music: 100,
    videos: 100,
};
var slice = createSlice({
    name: '@volume',
    initialState: initialState,
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
export var reducer = slice.reducer, actions = slice.actions;
//# sourceMappingURL=slice.js.map