import { RootState } from 'store';

export const selectors = {
  // не придумал куда лучше впихнуть, а отдельную сущность под один селектор не захотел создавать
  location: (state: RootState) => state.router.location,
  page: (state: RootState) => state.main.page,
  pages: (state: RootState) => state.main.pages,
  easterEggs: (state: RootState) => state.main.easterEggs,
  authorComments: (state: RootState) => state.main.authorComments,
  route: (state: RootState) => state.main.route,
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  isLoading: (state: RootState) => state.main.isLoading,
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
  flashlightProblems: (state: RootState) => state.main.flashlightProblems,
};
