import { createSlice } from '@reduxjs/toolkit';
var pages = Number(process.env.PAGES);
var easterEggs = Number(process.env.EASTER_EGGS);
var authorComments = Number(process.env.AUTHOR_COMMENTS);
export var initialState = {
    route: '/',
    page: 0,
    pages: pages,
    easterEggs: easterEggs,
    authorComments: authorComments,
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
        setRoute: function (state, action) {
            state.route = action.payload;
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        prevPage: function (_state) { },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nextPage: function (_state) { },
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