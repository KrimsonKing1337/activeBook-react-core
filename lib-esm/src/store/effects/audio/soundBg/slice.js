import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    howlInst1: null,
    howlInst2: null,
    lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};
var slice = createSlice({
    name: '@effects/audio/soundBg',
    initialState: initialState,
    reducers: {
        setSound: function (_state, _action) {
        },
        setHowlInst1: function (state, action) {
            state.howlInst1 = action.payload;
        },
        setHowlInst2: function (state, action) {
            state.howlInst2 = action.payload;
        },
        setLastInstIndex: function (state, action) {
            state.lastInstIndex = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map