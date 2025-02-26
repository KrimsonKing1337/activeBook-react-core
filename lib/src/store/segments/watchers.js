"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.watchActions = exports.watchIncrementSegmentsCount = exports.watchRemoveSegment = exports.watchSetSegment = void 0;
var effects_1 = require("redux-saga/effects");
var slice_1 = require("./slice");
var selectors_1 = require("./selectors");
function watchSetSegment(action) {
    var payload, id, isActive, segments, newValue, activeSegmentId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) {
                    return [2 /*return*/];
                }
                id = payload.id, isActive = payload.isActive;
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.segments)];
            case 1:
                segments = _a.sent();
                newValue = __assign({}, segments);
                if (!isActive) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.activeId)];
            case 2:
                activeSegmentId = _a.sent();
                if (!activeSegmentId) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setLastActiveId(activeSegmentId))];
            case 3:
                _a.sent();
                newValue[activeSegmentId] = false;
                _a.label = 4;
            case 4:
                newValue[id] = isActive;
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setSegments(newValue))];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetSegment = watchSetSegment;
function watchRemoveSegment(action) {
    var payload, segments, newValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                if (!payload) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.segments)];
            case 1:
                segments = _a.sent();
                newValue = __assign({}, segments);
                delete newValue[payload];
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setSegments(newValue))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchRemoveSegment = watchRemoveSegment;
function watchIncrementSegmentsCount() {
    var count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.count)];
            case 1:
                count = _a.sent();
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setSegmentsCount(count + 1))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchIncrementSegmentsCount = watchIncrementSegmentsCount;
function watchActions() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setSegment, watchSetSegment)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.removeSegment, watchRemoveSegment)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.incrementSegmentsCount, watchIncrementSegmentsCount)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchActions = watchActions;
//# sourceMappingURL=watchers.js.map