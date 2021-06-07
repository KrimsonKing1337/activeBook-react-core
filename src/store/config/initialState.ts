const volumeFields = {
  common: 'common',
  bg: 'bg',
  other: 'other',
} as const;

export type VolumeKeys = keyof typeof volumeFields;
export type VolumeValues = typeof volumeFields[VolumeKeys];

export type Volume = {
  [volumeFields.common]: number;
  [volumeFields.bg]: number;
  [volumeFields.other]: number;
};

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export interface ConfigState {
  volume: Volume;
  theme: Theme;
  vibration: boolean;
  flashlight: boolean;
  inverseColor: boolean;
  fontSize: number;
  lineSpace: number;
}

export const initialState: ConfigState = {
  volume: {
    common: 100,
    bg: 100,
    other: 100
  },
  theme: 'dark',
  vibration: true,
  flashlight: true,
  inverseColor: true,
  fontSize: 100,
  lineSpace: 100,
};
