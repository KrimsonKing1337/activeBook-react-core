import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    inverseColorIsActive: false,
    dotsIsActive: false,
    fontColor: 'var(--secondary)',
};
var slice = createSlice({
    name: '@effects/common',
    initialState: initialState,
    reducers: {
        setInverseColorActiveState: function (state, action) {
            state.inverseColorIsActive = action.payload;
        },
        setDotsActiveState: function (state, action) {
            state.dotsIsActive = action.payload;
        },
        setFontColor: function (state, action) {
            state.fontColor = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map