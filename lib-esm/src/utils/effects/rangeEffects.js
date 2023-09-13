export function isPageInRange(pageNumberCurrent, range) {
    return range.some(function (rangeCur) {
        return pageNumberCurrent >= rangeCur.from && pageNumberCurrent <= rangeCur.to;
    });
}
export function getEffectInRange(effects, pageNumberCurrent, type) {
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
//# sourceMappingURL=rangeEffects.js.map