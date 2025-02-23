import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    style: {},
    videos: [],
    images: [],
    shadow: {},
    Component: null,
};
var slice = createSlice({
    name: '@effects/background',
    initialState: initialState,
    reducers: {
        setStyle: function (state, action) {
            state.style = action.payload;
        },
        setVideos: function (state, action) {
            state.videos = action.payload;
        },
        setImages: function (state, action) {
            state.images = action.payload;
        },
        setComponent: function (state, action) {
            state.Component = action.payload;
        },
        setShadow: function (state, action) {
            state.shadow = action.payload;
        },
        reset: function () {
            return initialState;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map