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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffectsInRange = exports.isPageInRange = void 0;
function isPageInRange(pageNumberCurrent, range) {
    return range.some(function (rangeCur) {
        return pageNumberCurrent >= rangeCur.from && pageNumberCurrent <= rangeCur.to;
    });
}
exports.isPageInRange = isPageInRange;
function getEffectsInRange(effects, pageNumberCurrent, type) {
    var arr = effects;
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        var isInRange = isPageInRange(pageNumberCurrent, cur.range);
        if (isInRange) {
            if (cur.type === type) {
                var newItem = __assign(__assign({}, cur), { inRange: true });
                result.push(newItem);
            }
        }
    }
    return result;
}
exports.getEffectsInRange = getEffectsInRange;
//# sourceMappingURL=rangeEffects.js.map