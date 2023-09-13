"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicEffectsSelectors = exports.watchMusicEffectsActions = exports.musicEffectsActions = exports.musicEffectsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "musicEffectsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "musicEffectsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchMusicEffectsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "musicEffectsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map