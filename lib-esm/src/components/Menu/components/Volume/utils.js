import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
export var playAchievement = function () {
    play({
        id: Flags.volume,
        text: 'Тонко настраиваем громкость!',
    });
};
//# sourceMappingURL=utils.js.map