"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isOpen: false,
    bookmarks: [],
};
var slice = (0, toolkit_1.createSlice)({
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
exports.actions = slice.actions, exports.reducer = slice.reducer;
//# sourceMappingURL=slice.js.map