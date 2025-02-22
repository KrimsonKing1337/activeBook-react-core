import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    style: undefined,
    video: undefined,
    img: undefined,
    shadow: undefined,
    Component: undefined,
};
var slice = createSlice({
    name: '@effects/background',
    initialState: initialState,
    reducers: {
        setStyle: function (state, action) {
            state.style = action.payload;
        },
        setVideo: function (state, action) {
            state.video = action.payload;
        },
        setImg: function (state, action) {
            state.img = action.payload;
        },
        setShadow: function (state, action) {
            state.shadow = action.payload;
        },
        setComponent: function (state, action) {
            state.Component = action.payload;
        },
        reset: function () {
            return initialState;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map