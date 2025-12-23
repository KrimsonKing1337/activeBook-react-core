export interface State {
  inverseColorIsActive: boolean;
  dotsIsActive: boolean;

  dotLottieAmount: number;
  dotLottieReadyAmount: number;

  imagesAmount: number;
  imagesReadyAmount: number;

  videosAmount: number;
  videosReadyAmount: number;
  videosCurrentTime: Record<string, number>;
}

export type VideoCurrentTime = {
  id: string;
  currentTime: number;
};
