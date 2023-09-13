import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    isOpen: false,
    bookmarks: [],
};
var slice = createSlice({
    name: '@bookmarks',
    initialState: initialState,
    reducers: {
        setIsOpen: function (state, action) {
            state.isOpen = action.payload;
        },
        setBookmarks: function (state, action) {
            state.bookmarks = action.payload;
        },
    },
});
export var actions = slice.actions, reducer = slice.reducer;
//# sourceMappingURL=slice.js.map