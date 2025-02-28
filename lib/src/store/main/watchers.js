"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchActions = exports.watchNextPage = exports.watchPrevPage = exports.watchSetPage = exports.watchSetRoute = exports.watchSetMenuActiveState = void 0;
var redux_first_history_1 = require("redux-first-history");
var effects_1 = require("redux-saga/effects");
var slice_1 = require("./slice");
var selectors_1 = require("./selectors");
var utils_1 = require("./utils");
function watchSetMenuActiveState(action) {
    var payload, location, path;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.location)];
            case 1:
                location = _a.sent();
                if (!location.hash && payload === null) {
                    return [2 /*return*/];
                }
                path = window.location.pathname;
                if (payload === 'tableOfContents') {
                    path = '#table-of-contents';
                }
                else if (payload === 'menu') {
                    path = '#menu';
                }
                else if (payload === 'achievementsProgress') {
                    path = '#achievements-progress';
                }
                return [4 /*yield*/, (0, effects_1.put)((0, redux_first_history_1.push)(path))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetMenuActiveState = watchSetMenuActiveState;
function watchSetRoute(action) {
    var payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.put)((0, redux_first_history_1.push)(payload))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetRoute = watchSetRoute;
function watchSetPage(action) {
    var payload, path;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                path = "/page-".concat(payload);
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setIsLoading(true))];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, utils_1.waitForHowlerLoad)()];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, utils_1.waitForMediaLoad)()];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setIsLoading(false))];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, redux_first_history_1.push)(path))];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetPage = watchSetPage;
function watchPrevPage() {
    var page, newPageNumber;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.page)];
            case 1:
                page = _a.sent();
                if (page === 0) {
                    return [2 /*return*/];
                }
                newPageNumber = page - 1;
                if (newPageNumber < 1) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setPage(newPageNumber))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchPrevPage = watchPrevPage;
function watchNextPage() {
    var page, pages, newPageNumber;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.page)];
            case 1:
                page = _a.sent();
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.pages)];
            case 2:
                pages = _a.sent();
                newPageNumber = page + 1;
                if (newPageNumber > pages) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setPage(newPageNumber))];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchNextPage = watchNextPage;
function watchActions() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setMenuActiveState, watchSetMenuActiveState)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setRoute, watchSetRoute)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setPage, watchSetPage)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.prevPage, watchPrevPage)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.nextPage, watchNextPage)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchActions = watchActions;
//# sourceMappingURL=watchers.js.map