import type { ThemeOptions } from '@types';
export interface State {
    theme: string;
    themes: Record<string, ThemeOptions>;
    welcomeTour: boolean;
    vibration: boolean;
    flashlight: boolean;
    authorComments: boolean;
    fontSize: number;
    lineHeight: number;
}
