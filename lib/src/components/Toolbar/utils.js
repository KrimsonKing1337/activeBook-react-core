import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
export var playAchievement = function () {
    play({
        id: Flags.fontSize,
        text: 'Играем со шрифтами!',
    });
};
//# sourceMappingURL=utils.js.map