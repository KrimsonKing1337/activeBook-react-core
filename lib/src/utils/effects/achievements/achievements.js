"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
var achievements_1 = require("../../localStorage/achievements");
var utils_1 = require("./utils");
function play(_a) {
    var text = _a.text, id = _a.id, _b = _a.save, save = _b === void 0 ? true : _b, _c = _a.type, type = _c === void 0 ? 'regular' : _c;
    var saveIfNeeded = function () {
        if (save) {
            achievements_1.achievements.set(id, true);
            (0, utils_1.dispatchSetAchievement)({
                name: id,
                value: true,
            });
        }
    };
    var achievements = achievements_1.achievements.getAll();
    // если все ачивки получены, то тут и делать нечего
    if (achievements) {
        var achievementsFiltered = Object.values(achievements).filter(function (cur) { return cur === false; });
        if (achievementsFiltered.length === 0) {
            return;
        }
    }
    (0, utils_1.changeBgColor)(type);
    if (!achievements) {
        (0, utils_1.show)(text);
        saveIfNeeded();
        return;
    }
    if (achievements[id] === true) {
        return;
    }
    (0, utils_1.show)(text);
    saveIfNeeded();
    playAllAchievementsRewardWhenReady();
}
exports.play = play;
function playAllAchievementsRewardWhenReady() {
    var achievementsLength = (0, utils_1.getLength)();
    var achievementsRewardedLength = (0, utils_1.getRewardedLengthWithoutUnnecessary)();
    if (achievementsLength === achievementsRewardedLength) {
        play({
            id: utils_1.Flags.allAchievementsRewarded,
            text: 'Поздравляю! Вы получили все ачивки!',
            type: 'platinum',
        });
    }
}
//# sourceMappingURL=achievements.js.map