"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playAchievement = void 0;
var achievements_1 = require("../../../../utils/effects/achievements");
var utils_1 = require("../../../../utils/effects/achievements/utils");
var playAchievement = function () {
    (0, achievements_1.play)({
        id: utils_1.Flags.volume,
        text: 'Тонко настраиваем громкость!',
    });
};
exports.playAchievement = playAchievement;
//# sourceMappingURL=utils.js.map