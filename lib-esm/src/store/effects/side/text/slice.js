import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    isActive: false,
    template: null,
    speed: 60000,
};
var slice = createSlice({
    name: '@effects/sideText',
    initialState: initialState,
    reducers: {
        setActiveState: function (state, action) {
            state.isActive = action.payload;
        },
        setTemplate: function (state, action) {
            state.template = action.payload;
        },
        setSpeed: function (state, action) {
            state.speed = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map