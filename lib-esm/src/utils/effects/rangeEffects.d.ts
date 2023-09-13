import { Range, RangeEffect } from '@types';
export declare function isPageInRange(pageNumberCurrent: number, range: Range[]): boolean;
export type effectsJson = {
    effects: RangeEffect[];
};
export declare function getEffectInRange(effects: effectsJson, pageNumberCurrent: number, type: string): RangeEffect | undefined;
