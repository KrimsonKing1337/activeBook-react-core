import { createSlice } from '@reduxjs/toolkit';
export var initialState = {
    segments: {},
    // сколько компонентов Segment на странице было проинициализировано
    count: 0,
};
var slice = createSlice({
    name: '@segments',
    initialState: initialState,
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
            return initialState;
        },
    },
});
export var reducer = slice.reducer, actions = slice.actions;
//# sourceMappingURL=slice.js.map