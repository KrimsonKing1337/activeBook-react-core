"use strict";
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
                result.push(cur);
            }
        }
    }
    return result;
}
exports.getEffectsInRange = getEffectsInRange;
//# sourceMappingURL=rangeEffects.js.map