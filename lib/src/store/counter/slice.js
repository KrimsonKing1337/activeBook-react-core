import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    count: 0,
};
var slice = createSlice({
    name: '@counter',
    initialState: initialState,
    reducers: {
        setCount: function (state, action) {
            state.count = action.payload;
        },
        increment: function (_state) { },
        decrement: function (_state) { },
    },
});
export var reducer = slice.reducer, actions = slice.actions;
//# sourceMappingURL=slice.js.map