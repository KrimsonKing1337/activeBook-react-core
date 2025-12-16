import { ThemeOptions } from '@types';

import { setCssVariable } from './setCssVariable';

export function setThemeCss(theme: string, themes: Record<string, ThemeOptions>) {
  const colors = themes[theme];

  Object.keys(colors).forEach((keyCur) => {
    const valueCur = colors[keyCur as keyof ThemeOptions];

    setCssVariable(`--${keyCur}`, valueCur);
  });
}
