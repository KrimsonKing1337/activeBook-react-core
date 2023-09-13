"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainSelectors = exports.watchMainActions = exports.mainActions = exports.mainReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "mainReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "mainActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchMainActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "mainSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map