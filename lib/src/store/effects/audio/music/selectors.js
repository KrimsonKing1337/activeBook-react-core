"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectors = void 0;
exports.selectors = {
    howlInst1: function (state) { return state.musicEffects.howlInst1; },
    howlInst2: function (state) { return state.musicEffects.howlInst2; },
    lastInstIndex: function (state) { return state.musicEffects.lastInstIndex; },
    musicInst: function (state) {
        var _a = state.musicEffects, howlInst1 = _a.howlInst1, howlInst2 = _a.howlInst2, lastInstIndex = _a.lastInstIndex;
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