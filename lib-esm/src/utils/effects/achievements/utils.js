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
import { toast } from 'react-toastify';
import { store } from 'store';
import { achievementsActions } from 'store/achievements';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { achievements as achievementsLocalStorage } from 'utils/localStorage/achievements';
export var Flags;
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
})(Flags || (Flags = {}));
export var allAchievements = Object.values(Flags);
export var hiddenAchievements = [
    Flags.superEasterEggFound,
];
export var dontNeededForAllAchievementsReward = __spreadArray(__spreadArray([], hiddenAchievements, true), [
    Flags.allAchievementsRewarded,
], false);
export var voc = (_a = {},
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
var howlInst = new HowlWrapper({
    id: 'achievement-unlocked',
    src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});
export var show = function (text) {
    toast.success("Achievement unlock: ".concat(text), {
        onOpen: function () { return howlInst.play(); },
    });
};
export var typesVoc = {
    regular: '#07bc0c',
    gold: '#f1c40f',
    platinum: '#757575',
};
export function changeBgColor(type) {
    var color = typesVoc[type];
    store.dispatch(achievementsActions.setToastBgColor(color));
}
export function dispatchSetAchievement(value) {
    store.dispatch(achievementsActions.setAchievement(value));
}
export function getLength() {
    return store.getState().achievements.length;
}
export function getRewardedLengthWithoutUnnecessary() {
    var achievements = achievementsLocalStorage.getAll();
    var achievementsRewardedForCounting = __assign({}, achievements);
    dontNeededForAllAchievementsReward.forEach(function (cur) {
        delete achievementsRewardedForCounting[cur];
    });
    var achievementsRewardedForCountingFiltered = Object.values(achievementsRewardedForCounting).filter(function (cur) {
        return cur === true;
    });
    return achievementsRewardedForCountingFiltered.length;
}
export function getInitValues() {
    var values = {};
    allAchievements.forEach(function (achievementCur) {
        values[achievementCur] = false;
    });
    return values;
}
//# sourceMappingURL=utils.js.map