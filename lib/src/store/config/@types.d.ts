import type { ThemeName, ThemeOption } from '../../@types.js';
export interface State {
    theme: ThemeName | string;
    themes: Record<ThemeName | string, ThemeOption>;
    welcomeTour: boolean;
    vibration: boolean;
    flashlight: boolean;
    authorComments: boolean;
    fontSize: number;
    lineHeight: number;
}
