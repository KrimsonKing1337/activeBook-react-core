import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    audioInstances: {},
};
var slice = createSlice({
    name: '@effects/audio',
    initialState: initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setAudioInstance: function (_state, _action) { },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteAudioInstance: function (_state, _action) { },
        setAudioInstances: function (state, action) {
            state.audioInstances = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map