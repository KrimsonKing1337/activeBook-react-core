"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.reducer = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    route: '/',
    page: 0,
    pages: 44,
    easterEggs: 7,
    authorComments: 43,
    menuActiveState: null,
    isLoading: false,
    isVibrationAvailable: false,
    isFlashlightAvailable: false,
    flashlightProblems: '',
};
var slice = (0, toolkit_1.createSlice)({
    name: '@main',
    initialState: exports.initialState,
    reducers: {
        setRoute: function (state, action) {
            state.route = action.payload;
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        prevPage: function (_state) {
        },
        nextPage: function (_state) {
        },
        setMenuActiveState: function (state, action) {
            state.menuActiveState = action.payload;
        },
        setIsLoading: function (state, action) {
            state.isLoading = action.payload;
        },
        setIsVibrationAvailable: function (state, action) {
            state.isVibrationAvailable = action.payload;
        },
        setIsFlashlightAvailable: function (state, action) {
            state.isFlashlightAvailable = action.payload;
        },
        setFlashlightProblems: function (state, action) {
            state.flashlightProblems = action.payload;
        },
    },
});
exports.reducer = slice.reducer, exports.actions = slice.actions;
//# sourceMappingURL=slice.js.map