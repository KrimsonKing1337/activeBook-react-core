export var selectors = {
    howlInst1: function (state) { return state.soundBgEffects.howlInst1; },
    howlInst2: function (state) { return state.soundBgEffects.howlInst2; },
    lastInstIndex: function (state) { return state.soundBgEffects.lastInstIndex; },
    soundInst: function (state) {
        var _a = state.soundBgEffects, howlInst1 = _a.howlInst1, howlInst2 = _a.howlInst2, lastInstIndex = _a.lastInstIndex;
        if (lastInstIndex === 1) {
            return howlInst1;
        }
        if (lastInstIndex === 2) {
            return howlInst2;
        }
        return null;
    },
};
//# sourceMappingURL=selectors.js.map