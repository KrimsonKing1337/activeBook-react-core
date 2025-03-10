"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarksSelectors = exports.watchBookmarksActions = exports.bookmarksActions = exports.bookmarksReducer = void 0;
var slice_1 = require("./slice");
Object.defineProperty(exports, "bookmarksReducer", { enumerable: true, get: function () { return slice_1.reducer; } });
Object.defineProperty(exports, "bookmarksActions", { enumerable: true, get: function () { return slice_1.actions; } });
var watchers_1 = require("./watchers");
Object.defineProperty(exports, "watchBookmarksActions", { enumerable: true, get: function () { return watchers_1.watchActions; } });
var selectors_1 = require("./selectors");
Object.defineProperty(exports, "bookmarksSelectors", { enumerable: true, get: function () { return selectors_1.selectors; } });
//# sourceMappingURL=index.js.map