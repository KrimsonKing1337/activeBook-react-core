"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioEffectsSelectors = exports.watchAudioEffectsActions = exports.audioEffectsActions = exports.audioEffectsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "audioEffectsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "audioEffectsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchAudioEffectsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "audioEffectsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map