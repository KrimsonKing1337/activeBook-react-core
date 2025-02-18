import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
export type HowlInst = HowlWrapper | null;
export type HowlInstances = Record<string, HowlInst>;
export type LastInstIndex = 1 | 2;
export interface State {
    howlInstances: HowlInstances;
    howlInst1: HowlInst;
    howlInst2: HowlInst;
    lastInstIndex: LastInstIndex;
}
