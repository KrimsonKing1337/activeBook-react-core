"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchCounterActions = exports.counterSelectors = exports.counterActions = exports.counterReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "counterReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "counterActions", { enumerable: true, get: function () { return slice_1.actions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "counterSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchCounterActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
//# sourceMappingURL=index.js.map