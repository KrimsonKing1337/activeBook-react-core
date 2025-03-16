var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    inverseColorIsActive: false,
    dotsIsActive: false,
    dotLottieAmount: 0,
    dotLottieReadyAmount: 0,
    videosCurrentTime: {},
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
        setVideoCurrentTime: function (state, action) {
            var _a;
            var _b = action.payload, id = _b.id, currentTime = _b.currentTime;
            state.videosCurrentTime = __assign(__assign({}, state.videosCurrentTime), (_a = {}, _a[id] = currentTime, _a));
        },
        setVideosCurrentTime: function (state, action) {
            state.videosCurrentTime = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map