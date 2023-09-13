"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffectInRange = exports.isPageInRange = void 0;
function isPageInRange(pageNumberCurrent, range) {
    return range.some(function (rangeCur) {
        return pageNumberCurrent >= rangeCur.from && pageNumberCurrent <= rangeCur.to;
    });
}
exports.isPageInRange = isPageInRange;
function getEffectInRange(effects, pageNumberCurrent, type) {
    var arr = effects.effects;
    var objInRange;
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        var isInRange = isPageInRange(pageNumberCurrent, cur.range);
        if (isInRange) {
            if (cur.type === type) {
                objInRange = cur;
            }
            break;
        }
    }
    return objInRange;
}
exports.getEffectInRange = getEffectInRange;
//# sourceMappingURL=rangeEffects.js.map