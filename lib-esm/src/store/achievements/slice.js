import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    achievements: null,
    length: 10,
    toastBgColor: '#07bc0c',
};
var slice = createSlice({
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
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map