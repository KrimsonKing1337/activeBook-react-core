"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectors = void 0;
exports.selectors = {
    all: function (state) { return state.volume; },
    global: function (state) { return state.volume.global; },
    bg: function (state) { return state.volume.bg; },
    sfx: function (state) { return state.volume.sfx; },
    music: function (state) { return state.volume.music; },
};
//# sourceMappingURL=selectors.js.map