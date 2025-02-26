"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.reducer = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    segments: {},
    // сколько компонентов Segment на странице было проинициализировано
    count: 0,
};
var slice = (0, toolkit_1.createSlice)({
    name: '@segments',
    initialState: exports.initialState,
    reducers: {
        setSegments: function (state, action) {
            state.segments = action.payload;
        },
        setSegmentsCount: function (state, action) {
            state.count = action.payload;
        },
        incrementSegmentsCount: function () { },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setSegment: function (_state, _action) { },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        removeSegment: function (_state, _action) { },
        reset: function () {
            return exports.initialState;
        },
    },
});
exports.reducer = slice.reducer, exports.actions = slice.actions;
//# sourceMappingURL=slice.js.map