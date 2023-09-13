"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sideTextEffectSelectors = exports.watchSideTextActions = exports.sideTextActions = exports.sideTextReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "sideTextReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "sideTextActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchSideTextActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "sideTextEffectSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map