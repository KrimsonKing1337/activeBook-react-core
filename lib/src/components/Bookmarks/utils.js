import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
export var playAchievement = function () {
    play({
        id: Flags.bookmarks,
        text: 'Ставим закладки!',
    });
};
//# sourceMappingURL=utils.js.map