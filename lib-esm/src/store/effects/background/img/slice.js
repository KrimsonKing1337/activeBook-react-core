import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    isActive: false,
    src: '',
};
var slice = createSlice({
    name: '@effects/background/img',
    initialState: initialState,
    reducers: {
        setActiveState: function (state, action) {
            state.isActive = action.payload;
        },
        setSrc: function (state, action) {
            state.src = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map