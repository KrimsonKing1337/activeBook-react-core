import { Theme } from '@types';

import { setCssVariable } from './setCssVariable';

type Option = {
  main: string;
  secondary: string;
  hover: string;
  bg: string;
  'text-shadow-for-hover': string;
  overflow: string;
  [key: string]: any;
};

type Config = Record<Theme, Option>;

export function setThemeCss(theme: Theme) {
  const voc: Config = {
    dark: {
      main: '#a3a3a3',
      secondary: '#828282',
      hover: '#7a7a7a',
      bg: '#111',
      overflow: '#000d',
      'text-shadow-for-hover': '#ffffff7f',
    },
    orange: {
      main: '#f2994a',
      secondary: '#000',
      hover: '#f2c94c',
      bg: '#fff',
      overflow: '#fffd',
      'text-shadow-for-hover': '#1111117f',
    },
    darkBlue: {
      main: '#728c9a',
      secondary: '#000',
      hover: '#9bc4d9',
      bg: '#fff',
      overflow: '#fffd',
      'text-shadow-for-hover': '#1111117f',
    },
    black: {
      main: '#111',
      secondary: '#000',
      hover: '#a3a3a3',
      bg: '#fff',
      overflow: '#fffd',
      'text-shadow-for-hover': '#1111117f',
    },
  };

  const colors = voc[theme];

  Object.keys(colors).forEach((keyCur) => {
    const valueCur = colors[keyCur];

    setCssVariable(`--${keyCur}`, valueCur);
  });
}
