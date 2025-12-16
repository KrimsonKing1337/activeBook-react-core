import { ThemeName, ThemeOption } from '@types';

import { setCssVariable } from './setCssVariable';

export function setThemeCss(theme: string, themes: Record<ThemeName | string, ThemeOption>) {
  const colors = themes[theme];

  Object.keys(colors).forEach((keyCur) => {
    const valueCur = colors[keyCur as keyof ThemeOption];

    setCssVariable(`--${keyCur}`, valueCur);
  });
}
