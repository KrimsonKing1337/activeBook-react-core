import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    isActive: false,
    color: 'red',
    speed: 1000,
};
var slice = createSlice({
    name: '@effects/sideShadow',
    initialState: initialState,
    reducers: {
        setActiveState: function (state, action) {
            state.isActive = action.payload;
        },
        setColor: function (state, action) {
            state.color = action.payload;
        },
        setSpeed: function (state, action) {
            state.speed = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map