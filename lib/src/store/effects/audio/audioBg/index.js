"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioBgEffectsSelectors = exports.watchAudioBgEffectsActions = exports.audioBgEffectsActions = exports.audioBgEffectsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "audioBgEffectsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "audioBgEffectsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchAudioBgEffectsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "audioBgEffectsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map