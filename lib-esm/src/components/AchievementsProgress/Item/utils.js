import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
export var playAchievement = function () {
    play({
        id: Flags.tableOfContents,
        text: 'Переходим по главам!',
    });
};
//# sourceMappingURL=utils.js.map