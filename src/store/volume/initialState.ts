export interface VolumeState {
  common: number,
  bg: number,
  other: number
}

export const initialState: VolumeState = {
  common: 100,
  bg: 100,
  other: 100,
};
