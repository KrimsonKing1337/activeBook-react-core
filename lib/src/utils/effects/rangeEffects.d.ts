import type { RangeEffects, Range, RangeEffect } from '@types';
export declare function isPageInRange(pageNumberCurrent: number, range: Range[]): boolean;
export declare function getEffectsInRange(effects: RangeEffects, pageNumberCurrent: number, type: string): RangeEffect[];
