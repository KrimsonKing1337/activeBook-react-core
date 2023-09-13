"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectors = void 0;
exports.selectors = {
    // не придумал куда лучше впихнуть, а отдельную сущность под один селектор не захотел создавать
    location: function (state) { return state.router.location; },
    page: function (state) { return state.main.page; },
    pages: function (state) { return state.main.pages; },
    easterEggs: function (state) { return state.main.easterEggs; },
    authorComments: function (state) { return state.main.authorComments; },
    route: function (state) { return state.main.route; },
    menuActiveState: function (state) { return state.main.menuActiveState; },
    isLoading: function (state) { return state.main.isLoading; },
    isVibrationAvailable: function (state) { return state.main.isVibrationAvailable; },
    isFlashlightAvailable: function (state) { return state.main.isFlashlightAvailable; },
    flashlightProblems: function (state) { return state.main.flashlightProblems; },
};
//# sourceMappingURL=selectors.js.map