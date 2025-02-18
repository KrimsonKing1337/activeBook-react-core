export var selectors = {
    howlInstances: function (state) { return state.soundEffects.howlInstances; },
    howlInst1: function (state) { return state.soundEffects.howlInst1; },
    howlInst2: function (state) { return state.soundEffects.howlInst2; },
    lastInstIndex: function (state) { return state.soundEffects.lastInstIndex; },
    soundInst: function (state) {
        var _a = state.soundEffects, howlInst1 = _a.howlInst1, howlInst2 = _a.howlInst2, lastInstIndex = _a.lastInstIndex;
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