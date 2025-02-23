export function isPageInRange(pageNumberCurrent, range) {
    return range.some(function (rangeCur) {
        return pageNumberCurrent >= rangeCur.from && pageNumberCurrent <= rangeCur.to;
    });
}
export function getEffectsInRange(effects, pageNumberCurrent, type) {
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
//# sourceMappingURL=rangeEffects.js.map