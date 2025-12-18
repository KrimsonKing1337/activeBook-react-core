import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
export var playAchievement = function () {
    play({
        id: Flags.themes,
        text: 'Меняем тему оформления!',
    });
};
//# sourceMappingURL=utils.js.map