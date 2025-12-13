export var selectors = {
    inverseColorIsActive: function (state) { return state.effects.inverseColorIsActive; },
    dotsIsActive: function (state) { return state.effects.dotsIsActive; },
    dotLottieAmount: function (state) { return state.effects.dotLottieAmount; },
    dotLottieReadyAmount: function (state) { return state.effects.dotLottieReadyAmount; },
    isDotLottieLoading: function (state) { return state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount; },
    videosCurrentTime: function (state) { return state.effects.videosCurrentTime; },
};
//# sourceMappingURL=selectors.js.map