"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectors = void 0;
exports.selectors = {
    all: function (state) { return state.config; },
    theme: function (state) { return state.config.theme; },
    vibration: function (state) { return state.config.vibration; },
    flashlight: function (state) { return state.config.flashlight; },
    authorComments: function (state) { return state.config.authorComments; },
    fontSize: function (state) { return state.config.fontSize; },
    lineHeight: function (state) { return state.config.lineHeight; },
};
//# sourceMappingURL=selectors.js.map