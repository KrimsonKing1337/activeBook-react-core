import type { RootState } from 'store';

const isDotLottieLoading = (state: RootState) => state.effects.dotLottieAmount !== state.effects.dotLottieReadyAmount;

export const selectors = {
  // не придумал куда лучше впихнуть, а отдельную сущность под один селектор не захотел создавать
  location: (state: RootState) => state.router.location,
  page: (state: RootState) => state.main.page,
  pages: (state: RootState) => state.main.pages,
  tableOfContents: (state: RootState) => state.main.tableOfContents,
  easterEggs: (state: RootState) => state.main.easterEggs,
  authorComments: (state: RootState) => state.main.authorComments,
  route: (state: RootState) => state.main.route,
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  isLoading: (state: RootState) => state.main.isLoading || isDotLottieLoading(state),
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
  flashlightProblems: (state: RootState) => state.main.flashlightProblems,
};
