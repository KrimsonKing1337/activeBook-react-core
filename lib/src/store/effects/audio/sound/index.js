"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundEffectsSelectors = exports.watchSoundEffectsActions = exports.soundEffectsActions = exports.soundEffectsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "soundEffectsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "soundEffectsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchSoundEffectsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "soundEffectsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map