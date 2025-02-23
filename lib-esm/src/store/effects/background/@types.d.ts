import type { BackgroundEffect } from 'hooks/effects/background/@types';
export type BackgroundEffects = Record<string, BackgroundEffect>;
export interface State {
    effects: BackgroundEffects;
}
