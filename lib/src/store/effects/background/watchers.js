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
exports.watchActions = exports.watchDeleteEffect = exports.watchSetEffect = void 0;
var effects_1 = require("redux-saga/effects");
var slice_1 = require("./slice");
var selectors_1 = require("./selectors");
function watchSetEffect(action) {
    var payload, id, effects, newValue;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                payload = action.payload;
                if (!payload) {
                    return [2 /*return*/];
                }
                id = payload.id;
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.effects)];
            case 1:
                effects = _b.sent();
                newValue = __assign(__assign({}, effects), (_a = {}, _a[id] = payload, _a));
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setEffects(newValue))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchSetEffect = watchSetEffect;
function watchDeleteEffect(action) {
    var payload, effects, newValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = action.payload;
                return [4 /*yield*/, (0, effects_1.select)(selectors_1.selectors.effects)];
            case 1:
                effects = _a.sent();
                newValue = __assign({}, effects);
                delete newValue[payload];
                return [4 /*yield*/, (0, effects_1.put)(slice_1.actions.setEffects(newValue))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchDeleteEffect = watchDeleteEffect;
function watchActions() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.setEffect, watchSetEffect)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, effects_1.takeLatest)(slice_1.actions.deleteEffect, watchDeleteEffect)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchActions = watchActions;
//# sourceMappingURL=watchers.js.map