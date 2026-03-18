import type { TableOfContents } from '@types';

export type MenuActiveState = null | 'menu' | 'tableOfContents' | 'achievementsProgress';

export type FlashlightState = false | 'js' | 'cordova';

export interface State {
  showLoader: boolean;
  id: string;
  page: number;
  pages: number;
  authorComments: number;
  allPagesSeen: boolean;
  tableOfContents: TableOfContents;
  menuActiveState: MenuActiveState;
  isVibrationAvailable: boolean | null;
  isFlashlightAvailable: FlashlightState | null;
  flashlightProblems: string;
  isAudioUnlocked: boolean;
}
