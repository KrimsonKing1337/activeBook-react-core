import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    effects: {},
};
var slice = createSlice({
    name: '@effects/background',
    initialState: initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setEffect: function (_state, _action) { },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteEffect: function (_state, _action) { },
        setEffects: function (state, action) {
            state.effects = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map