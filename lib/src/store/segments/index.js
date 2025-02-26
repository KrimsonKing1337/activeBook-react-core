"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentsSelectors = exports.watchSegmentsActions = exports.segmentsActions = exports.segmentsReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "segmentsReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "segmentsActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchSegmentsActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "segmentsSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map