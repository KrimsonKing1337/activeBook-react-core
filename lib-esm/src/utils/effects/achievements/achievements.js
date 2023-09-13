import { achievements as achievementsUtils } from 'utils/localStorage/achievements';
import { changeBgColor, dispatchSetAchievement, Flags, getLength, getRewardedLengthWithoutUnnecessary, show, } from './utils';
export function play(_a) {
    var text = _a.text, id = _a.id, _b = _a.save, save = _b === void 0 ? true : _b, _c = _a.type, type = _c === void 0 ? 'regular' : _c;
    var saveIfNeeded = function () {
        if (save) {
            achievementsUtils.set(id, true);
            dispatchSetAchievement({
                name: id,
                value: true,
            });
        }
    };
    var achievements = achievementsUtils.getAll();
    // если все ачивки получены, то тут и делать нечего
    if (achievements) {
        var achievementsFiltered = Object.values(achievements).filter(function (cur) { return cur === false; });
        if (achievementsFiltered.length === 0) {
            return;
        }
    }
    changeBgColor(type);
    if (!achievements) {
        show(text);
        saveIfNeeded();
        return;
    }
    if (achievements[id] === true) {
        return;
    }
    show(text);
    saveIfNeeded();
    playAllAchievementsRewardWhenReady();
}
function playAllAchievementsRewardWhenReady() {
    var achievementsLength = getLength();
    var achievementsRewardedLength = getRewardedLengthWithoutUnnecessary();
    if (achievementsLength === achievementsRewardedLength) {
        play({
            id: Flags.allAchievementsRewarded,
            text: 'Поздравляю! Вы получили все ачивки!',
            type: 'platinum',
        });
    }
}
//# sourceMappingURL=achievements.js.map