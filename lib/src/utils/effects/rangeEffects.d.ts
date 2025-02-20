import type { RangeEffectsJson, Range, RangeEffect } from '../../@types.js';
export declare function isPageInRange(pageNumberCurrent: number, range: Range[]): boolean;
export declare function getEffectsInRange(effects: RangeEffectsJson, pageNumberCurrent: number, type: string): RangeEffect[];
