"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    audioInstances: {},
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/audio',
    initialState: exports.initialState,
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
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map