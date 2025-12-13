export interface State {
    inverseColorIsActive: boolean;
    dotsIsActive: boolean;
    dotLottieAmount: number;
    dotLottieReadyAmount: number;
    videosCurrentTime: Record<string, number>;
}
export type VideoCurrentTime = {
    id: string;
    currentTime: number;
};
