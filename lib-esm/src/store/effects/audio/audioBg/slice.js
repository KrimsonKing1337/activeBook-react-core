import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    audioInstances: {},
    isDeleting: false,
};
var slice = createSlice({
    name: '@effects/audioBg',
    initialState: initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setAudioInstance: function (_state, _action) { },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteAudioInstance: function (_state, _action) { },
        setAudioInstances: function (state, action) {
            state.audioInstances = action.payload;
        },
        setIsDeleting: function (state, action) {
            state.isDeleting = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map