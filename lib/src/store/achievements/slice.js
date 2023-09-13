"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    achievements: null,
    length: 10,
    toastBgColor: '#07bc0c',
};
var slice = (0, toolkit_1.createSlice)({
    name: '@achievements',
    initialState: initialState,
    reducers: {
        setAchievement: function (state, action) {
            var _a = action.payload, name = _a.name, value = _a.value;
            if (state.achievements) {
                state.achievements[name] = value;
            }
        },
        setAll: function (state, action) {
            state.achievements = action.payload;
        },
        setToastBgColor: function (state, action) {
            state.toastBgColor = action.payload;
        },
    },
});
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map