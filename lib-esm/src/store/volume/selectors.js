export var selectors = {
    all: function (state) { return state.volume; },
    global: function (state) { return state.volume.global; },
    bg: function (state) { return state.volume.bg; },
    sfx: function (state) { return state.volume.sfx; },
    music: function (state) { return state.volume.music; },
    videos: function (state) { return state.volume.videos; },
};
//# sourceMappingURL=selectors.js.map