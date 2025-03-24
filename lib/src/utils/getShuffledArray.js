"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShuffledArray = void 0;
var getShuffledArray = function (array) {
    var _a;
    var result = __spreadArray([], array, true);
    for (var i = result.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [result[j], result[i]], result[i] = _a[0], result[j] = _a[1];
    }
    return result;
};
exports.getShuffledArray = getShuffledArray;
//# sourceMappingURL=getShuffledArray.js.map