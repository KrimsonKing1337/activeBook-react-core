"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sideShadowEffectSelectors = exports.watchSideShadowActions = exports.sideShadowActions = exports.sideShadowReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "sideShadowReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "sideShadowActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchSideShadowActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "sideShadowEffectSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map