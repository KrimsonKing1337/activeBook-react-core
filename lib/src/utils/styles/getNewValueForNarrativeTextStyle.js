"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewValueForNarrativeTextStyle = void 0;
// font-size || line-height
function getNewValueForNarrativeTextStyle(currentValue, isMoreAction) {
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
exports.getNewValueForNarrativeTextStyle = getNewValueForNarrativeTextStyle;
//# sourceMappingURL=getNewValueForNarrativeTextStyle.js.map