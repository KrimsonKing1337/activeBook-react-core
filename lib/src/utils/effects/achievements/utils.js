"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitValues = exports.getRewardedLengthWithoutUnnecessary = exports.getLength = exports.dispatchSetAchievement = exports.changeBgColor = exports.typesVoc = exports.show = exports.voc = exports.dontNeededForAllAchievementsReward = exports.hiddenAchievements = exports.allAchievements = exports.Flags = void 0;
var react_toastify_1 = require("react-toastify");
var store_1 = require("../../../store");
var achievements_1 = require("../../../store/achievements");
var HowlWrapper_1 = require("../../effects/audio/HowlWrapper");
var achievements_2 = require("../../localStorage/achievements");
var Flags;
(function (Flags) {
    Flags["firstMove"] = "firstMove";
    Flags["volume"] = "volume";
    Flags["fontSize"] = "fontSize";
    Flags["bookmarks"] = "bookmarks";
    Flags["tableOfContents"] = "tableOfContents";
    Flags["themes"] = "themes";
    Flags["menuToggles"] = "menuToggles";
    Flags["allPagesSeen"] = "allPagesSeen";
    Flags["allEasterEggsFound"] = "allEasterEggsFound";
    Flags["allAuthorCommentsSeen"] = "allAuthorCommentsSeen";
    Flags["superEasterEggFound"] = "superEasterEggFound";
    Flags["allAchievementsRewarded"] = "allAchievementsRewarded";
})(Flags || (exports.Flags = Flags = {}));
exports.allAchievements = Object.values(Flags);
exports.hiddenAchievements = [
    Flags.superEasterEggFound,
];
exports.dontNeededForAllAchievementsReward = __spreadArray(__spreadArray([], exports.hiddenAchievements, true), [
    Flags.allAchievementsRewarded,
], false);
exports.voc = (_a = {},
    _a[Flags.firstMove] = {
        order: 0,
        title: 'Первый шаг',
        type: 'regular',
    },
    _a[Flags.volume] = {
        order: 1,
        title: 'Лучше громко, чем тихо',
        type: 'regular',
    },
    _a[Flags.fontSize] = {
        order: 2,
        title: 'Играл со шрифтами, проиграл',
        type: 'regular',
    },
    _a[Flags.bookmarks] = {
        order: 3,
        title: 'Лучшие закладки - в книге',
        type: 'regular',
    },
    _a[Flags.tableOfContents] = {
        order: 4,
        title: 'Прыгаем по главам, но не по головам',
        type: 'regular',
    },
    _a[Flags.themes] = {
        order: 5,
        title: 'Все темы хороши, но лучше тёмная',
        type: 'regular',
    },
    _a[Flags.menuToggles] = {
        order: 6,
        title: 'Туда-сюдашечки',
        type: 'regular',
    },
    _a[Flags.allPagesSeen] = {
        order: 7,
        title: 'Все страницы прочитаны',
        type: 'gold',
    },
    _a[Flags.allEasterEggsFound] = {
        order: 8,
        title: 'Все пасхалки найдены',
        type: 'gold',
    },
    _a[Flags.allAuthorCommentsSeen] = {
        order: 9,
        title: 'Все комментарии автора прочитаны',
        type: 'gold',
    },
    _a[Flags.superEasterEggFound] = {
        order: 10,
        title: 'Супер-секрет найден',
        type: 'platinum',
    },
    _a[Flags.allAchievementsRewarded] = {
        order: 11,
        title: 'Все награды получены',
        type: 'platinum',
    },
    _a);
var howlInst = new HowlWrapper_1.HowlWrapper({
    src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});
var show = function (text) {
    react_toastify_1.toast.success("Achievement unlock: ".concat(text), {
        onOpen: function () { return howlInst.play(); },
    });
};
exports.show = show;
exports.typesVoc = {
    regular: '#07bc0c',
    gold: '#f1c40f',
    platinum: '#757575',
};
function changeBgColor(type) {
    var color = exports.typesVoc[type];
    store_1.store.dispatch(achievements_1.achievementsActions.setToastBgColor(color));
}
exports.changeBgColor = changeBgColor;
function dispatchSetAchievement(value) {
    store_1.store.dispatch(achievements_1.achievementsActions.setAchievement(value));
}
exports.dispatchSetAchievement = dispatchSetAchievement;
function getLength() {
    return store_1.store.getState().achievements.length;
}
exports.getLength = getLength;
function getRewardedLengthWithoutUnnecessary() {
    var achievements = achievements_2.achievements.getAll();
    var achievementsRewardedForCounting = __assign({}, achievements);
    exports.dontNeededForAllAchievementsReward.forEach(function (cur) {
        delete achievementsRewardedForCounting[cur];
    });
    var achievementsRewardedForCountingFiltered = Object.values(achievementsRewardedForCounting).filter(function (cur) {
        return cur === true;
    });
    return achievementsRewardedForCountingFiltered.length;
}
exports.getRewardedLengthWithoutUnnecessary = getRewardedLengthWithoutUnnecessary;
function getInitValues() {
    var values = {};
    exports.allAchievements.forEach(function (achievementCur) {
        values[achievementCur] = false;
    });
    return values;
}
exports.getInitValues = getInitValues;
//# sourceMappingURL=utils.js.map