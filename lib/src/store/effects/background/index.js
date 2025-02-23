"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundEffectsSelectors = exports.watchBackgroundEffectsActions = exports.backgroundEffectsActions = exports.backgroundEffectsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "backgroundEffectsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "backgroundEffectsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchBackgroundEffectsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "backgroundEffectsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map