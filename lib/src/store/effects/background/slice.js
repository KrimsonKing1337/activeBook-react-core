"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    effects: {},
};
var slice = (0, toolkit_1.createSlice)({
    name: '@effects/background',
    initialState: exports.initialState,
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
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map