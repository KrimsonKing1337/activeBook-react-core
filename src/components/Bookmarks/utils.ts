import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';

export const playAchievement = () => {
  play({
    id: Flags.bookmarks,
    text: 'Ставим закладки!',
  });
};