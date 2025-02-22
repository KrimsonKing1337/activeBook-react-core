import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    inverseColorIsActive: false,
    dotsIsActive: false,
    fontColor: 'var(--secondary)',
    fontStyle: {},
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
        setFontStyle: function (state, action) {
            state.fontStyle = action.payload;
        },
        resetFont: function (state) {
            var fontColor = initialState.fontColor, fontStyle = initialState.fontStyle;
            state.fontColor = fontColor;
            state.fontStyle = fontStyle;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map