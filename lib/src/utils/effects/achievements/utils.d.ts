import { Achievement } from '../../../store/achievements/@types';
export declare enum Flags {
    firstMove = "firstMove",
    volume = "volume",
    fontSize = "fontSize",
    bookmarks = "bookmarks",
    tableOfContents = "tableOfContents",
    themes = "themes",
    menuToggles = "menuToggles",
    allPagesSeen = "allPagesSeen",
    allEasterEggsFound = "allEasterEggsFound",
    allAuthorCommentsSeen = "allAuthorCommentsSeen",
    superEasterEggFound = "superEasterEggFound",
    allAchievementsRewarded = "allAchievementsRewarded"
}
export type FlagsWithoutHidden = Exclude<Flags, Flags.superEasterEggFound>;
export declare const allAchievements: Flags[];
export declare const hiddenAchievements: Flags[];
export declare const dontNeededForAllAchievementsReward: Flags[];
export type VocItem = {
    order: number;
    title: string;
    type: Color;
};
export declare const voc: Record<Flags, VocItem>;
export declare const show: (text: string) => void;
export type Color = 'regular' | 'gold' | 'platinum';
export declare const typesVoc: Record<Color, string>;
export declare function changeBgColor(type: Color): void;
export declare function dispatchSetAchievement(value: Achievement): void;
export declare function getLength(): number;
export declare function getRewardedLengthWithoutUnnecessary(): number;
export declare function getInitValues(): Record<string, boolean>;
