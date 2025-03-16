import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    inverseColorIsActive: false,
    dotsIsActive: false,
    dotLottieAmount: 0,
    dotLottieReadyAmount: 0,
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
        setDotLottieAmount: function (state, action) {
            state.dotLottieAmount = action.payload;
        },
        setDotLottieReadyAmount: function (state, action) {
            state.dotLottieReadyAmount = action.payload;
        },
        setDotLottieReady: function () { },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map