import { EffectsJson, Range, RangeEffect } from '../../@types.js';
export declare function isPageInRange(pageNumberCurrent: number, range: Range[]): boolean;
export declare function getEffectInRange(effects: EffectsJson, pageNumberCurrent: number, type: string): RangeEffect | undefined;
