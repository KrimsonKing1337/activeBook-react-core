var isDotLottieLoading = function (state) { return state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount; };
export var selectors = {
    page: function (state) { return state.main.page; },
    pages: function (state) { return state.main.pages; },
    allPagesSeen: function (state) { return state.main.allPagesSeen; },
    tableOfContents: function (state) { return state.main.tableOfContents; },
    route: function (state) { return state.main.route; },
    menuActiveState: function (state) { return state.main.menuActiveState; },
    isLoading: function (state) { return state.main.isLoading || isDotLottieLoading(state); },
    isVibrationAvailable: function (state) { return state.main.isVibrationAvailable; },
    isFlashlightAvailable: function (state) { return state.main.isFlashlightAvailable; },
    flashlightProblems: function (state) { return state.main.flashlightProblems; },
};
//# sourceMappingURL=selectors.js.map