"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeSelectors = exports.watchVolumeActions = exports.volumeActions = exports.volumeReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "volumeReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "volumeActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchVolumeActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "volumeSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map