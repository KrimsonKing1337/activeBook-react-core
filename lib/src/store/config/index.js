"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSelectors = exports.watchConfigActions = exports.configActions = exports.configReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "configReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "configActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchConfigActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "configSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map