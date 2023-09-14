import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
export var playAchievement = function () {
    play({
        id: Flags.menuToggles,
        text: 'Туда-сюдашечки!',
    });
};
//# sourceMappingURL=utils.js.map