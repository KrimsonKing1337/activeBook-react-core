// font-size || line-height
export function getNewValueForNarrativeTextStyle(currentValue, isMoreAction) {
    var step = 25;
    var limit = isMoreAction ? 150 : 75;
    var newValue;
    if (isMoreAction) {
        newValue = currentValue + step;
        if (newValue >= limit) {
            return limit;
        }
    }
    else {
        newValue = currentValue - step;
        if (newValue <= limit) {
            return limit;
        }
    }
    return newValue;
}
//# sourceMappingURL=getNewValueForNarrativeTextStyle.js.map