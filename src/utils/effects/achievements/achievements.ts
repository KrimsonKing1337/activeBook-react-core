import { achievements as achievementsUtils } from 'utils/localStorage/achievements';

import {
  changeBgColor,
  Color,
  dispatchSetAchievement,
  Flags,
  getLength,
  getRewardedLengthWithoutUnnecessary,
  show,
} from './utils';

export type PlayProps = {
  text: string;
  id: Flags;
  save?: boolean;
  type?: Color;
};

export function play({ text, id, save = true, type = 'regular' }: PlayProps) {
  const saveIfNeeded = () => {
    if (save) {
      achievementsUtils.set(id, true);

      dispatchSetAchievement({
        name: id,
        value: true,
      });
    }
  };

  const achievements = achievementsUtils.getAll();

  // если все ачивки получены, то тут и делать нечего
  if (achievements) {
    const achievementsFiltered = Object.values(achievements).filter((cur) => cur === false);

    if (achievementsFiltered.length === 0) {
      return;
    }
  }

  changeBgColor(type);

  if (!achievements) {
    show(text);

    saveIfNeeded();

    return;
  }

  if (achievements[id] === true) {
    return;
  }

  show(text);

  saveIfNeeded();

  playAllAchievementsRewardWhenReady();
}

function playAllAchievementsRewardWhenReady() {
  const achievementsLength = getLength();
  const achievementsRewardedLength = getRewardedLengthWithoutUnnecessary();

  if (achievementsLength === achievementsRewardedLength) {
    play({
      id: Flags.allAchievementsRewarded,
      text: 'Поздравляю! Вы получили все ачивки!',
      type: 'platinum',
    });
  }
}
