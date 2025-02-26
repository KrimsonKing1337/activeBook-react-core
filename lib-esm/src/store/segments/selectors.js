export var selectors = {
    segments: function (state) { return state.segments.segments; },
    lastActiveId: function (state) { return state.segments.lastActiveId; },
    count: function (state) { return state.segments.count; },
    activeId: function (state) {
        var segments = state.segments.segments;
        var keys = Object.keys(segments);
        for (var i = 0; i < keys.length; i++) {
            var id = keys[i];
            if (segments[id]) {
                return id;
            }
        }
    },
};
//# sourceMappingURL=selectors.js.map