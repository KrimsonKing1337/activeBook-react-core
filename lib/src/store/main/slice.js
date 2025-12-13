import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    route: '/',
    page: 0,
    pages: 0,
    tableOfContents: [],
    easterEggs: 0,
    authorComments: 0,
    menuActiveState: null,
    isLoading: false,
    isVibrationAvailable: null,
    isFlashlightAvailable: null,
    flashlightProblems: '',
};
var slice = createSlice({
    name: '@main',
    initialState: initialState,
    reducers: {
        setEasterEggs: function (state, action) {
            state.easterEggs = action.payload;
        },
        setAuthorComments: function (state, action) {
            state.authorComments = action.payload;
        },
        setPages: function (state, action) {
            state.pages = action.payload;
        },
        setTableOfContents: function (state, action) {
            state.tableOfContents = action.payload;
        },
        setPage: function (state, action) {
            state.page = action.payload;
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
export var reducer = slice.reducer, actions = slice.actions;
//# sourceMappingURL=slice.js.map