import { toast } from 'react-toastify';

import { Achievement } from 'store/achievements/@types';
import { store } from 'store';
import { achievementsActions } from 'store/achievements';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { achievements as achievementsLocalStorage } from 'utils/localStorage/achievements';

export enum Flags {
  firstMove = 'firstMove',
  volume = 'volume',
  fontSize = 'fontSize',
  bookmarks = 'bookmarks',
  tableOfContents = 'tableOfContents',
  themes = 'themes',
  menuToggles = 'menuToggles',
  allPagesSeen = 'allPagesSeen',
  allEasterEggsFound = 'allEasterEggsFound',
  allAuthorCommentsSeen = 'allAuthorCommentsSeen',
  superEasterEggFound = 'superEasterEggFound',
  allAchievementsRewarded = 'allAchievementsRewarded',
}

export type FlagsWithoutHidden = Exclude<Flags, Flags.superEasterEggFound>;

export const allAchievements = Object.values(Flags);

export const hiddenAchievements = [
  Flags.superEasterEggFound,
];

export const dontNeededForAllAchievementsReward = [
  ...hiddenAchievements,
  Flags.allAchievementsRewarded,
];

export type VocItem = {
  order: number;
  title: string;
  type: Color;
};

export const voc: Record<Flags, VocItem> = {
  [Flags.firstMove]: {
    order: 0,
    title: 'Первый шаг',
    type: 'regular',
  },
  [Flags.volume]: {
    order: 1,
    title: 'Лучше громко, чем тихо',
    type: 'regular',
  },
  [Flags.fontSize]: {
    order: 2,
    title: 'Играл со шрифтами, проиграл',
    type: 'regular',
  },
  [Flags.bookmarks]: {
    order: 3,
    title: 'Лучшие закладки - в книге',
    type: 'regular',
  },
  [Flags.tableOfContents]: {
    order: 4,
    title: 'Прыгаем по главам, но не по головам',
    type: 'regular',
  },
  [Flags.themes]: {
    order: 5,
    title: 'Все темы хороши, но лучше тёмная',
    type: 'regular',
  },
  [Flags.menuToggles]: {
    order: 6,
    title: 'Туда-сюдашечки',
    type: 'regular',
  },
  [Flags.allPagesSeen]: {
    order: 7,
    title: 'Все страницы прочитаны',
    type: 'gold',
  },
  [Flags.allEasterEggsFound]: {
    order: 8,
    title: 'Все пасхалки найдены',
    type: 'gold',
  },
  [Flags.allAuthorCommentsSeen]: {
    order: 9,
    title: 'Все комментарии автора прочитаны',
    type: 'gold',
  },
  [Flags.superEasterEggFound]: {
    order: 10,
    title: 'Супер-секрет найден',
    type: 'platinum',
  },
  [Flags.allAchievementsRewarded]: {
    order: 11,
    title: 'Все награды получены',
    type: 'platinum',
  },
};

const howlInst = new HowlWrapper({
  id: 'achievement-unlocked',
  src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});

export const show = (text: string) => {
  toast.success(`Achievement unlock: ${text}`, {
    onOpen: () => howlInst.play(),
  });
};

export type Color = 'regular' | 'gold' | 'platinum';

export const typesVoc: Record<Color, string> = {
  regular: '#07bc0c',
  gold: '#f1c40f',
  platinum: '#757575',
};

export function changeBgColor(type: Color) {
  const color = typesVoc[type];

  store.dispatch(achievementsActions.setToastBgColor(color));
}

export function dispatchSetAchievement(value: Achievement) {
  store.dispatch(achievementsActions.setAchievement(value));
}

export function getLength() {
  return store.getState().achievements.length;
}

export function getRewardedLengthWithoutUnnecessary() {
  const achievements = achievementsLocalStorage.getAll();

  const achievementsRewardedForCounting = { ...achievements };

  dontNeededForAllAchievementsReward.forEach((cur) => {
    delete achievementsRewardedForCounting[cur];
  });

  const achievementsRewardedForCountingFiltered = Object.values(achievementsRewardedForCounting).filter((cur) => {
    return cur === true;
  });

  return achievementsRewardedForCountingFiltered.length;
}

export function getInitValues() {
  const values: Record<string, boolean> = {};

  allAchievements.forEach((achievementCur) => {
    values[achievementCur] = false;
  });

  return values;
}
