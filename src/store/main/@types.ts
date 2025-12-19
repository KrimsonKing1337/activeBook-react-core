import type { TableOfContents } from '@types';

export type MenuActiveState = null | 'menu' | 'tableOfContents' | 'achievementsProgress';

export type FlashlightState = false | 'js' | 'cordova';

export interface State {
  id: string;
  page: number;
  pages: number;
  allPagesSeen: boolean;
  tableOfContents: TableOfContents;
  menuActiveState: MenuActiveState;
  isLoading: boolean;
  isVibrationAvailable: boolean | null;
  isFlashlightAvailable: FlashlightState | null;
  flashlightProblems: string;
}
