import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    color: 'var(--secondary)',
    style: {},
};
var slice = createSlice({
    name: '@effects/font',
    initialState: initialState,
    reducers: {
        setColor: function (state, action) {
            state.color = action.payload;
        },
        setStyle: function (state, action) {
            state.style = action.payload;
        },
        reset: function () {
            return initialState;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map