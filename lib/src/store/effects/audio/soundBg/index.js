"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundBgEffectsSelectors = exports.watchSoundBgEffectsActions = exports.soundBgEffectsActions = exports.soundBgEffectsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "soundBgEffectsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "soundBgEffectsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchSoundBgEffectsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "soundBgEffectsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map