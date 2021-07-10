export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export interface ConfigState {
  theme: Theme;
  vibration: boolean;
  flashlight: boolean;
  inverseColor: boolean;
  fontSize: number;
  lineHeight: number;
}

export const initialState: ConfigState = {
  theme: 'dark',
  vibration: true,
  flashlight: true,
  inverseColor: true,
  fontSize: 100,
  lineHeight: 100,
};
