import { Flags } from 'utils/effects/achievements/utils';
export type Achievement = {
    name: Flags;
    value: boolean;
};
export interface State {
    achievements: Record<Flags, boolean> | null;
    length: number;
    toastBgColor: string;
}
