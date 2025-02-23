"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    style: {},
    videos: [],
    images: [],
    shadow: {},
    Component: null,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/background',
    initialState: exports.initialState,
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
            return exports.initialState;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map