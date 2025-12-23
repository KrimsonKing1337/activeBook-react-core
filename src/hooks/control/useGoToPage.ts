import { useNavigate, useLocation } from 'react-router-dom';

import { mainActions, mainSelectors } from 'store/main';

import { useDispatch, useSelector } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';

export function useGoToPage() {
  const dispatch = useDispatch();

  const currentPage = useSelector(mainSelectors.page);

  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    if (page === 0) {
      dispatch(mainActions.setPage(0));
      dispatch(backgroundEffectsActions.setEffects({}));

      navigate('/');

      return;
    }

    dispatch(mainActions.setPage(page));
    dispatch(backgroundEffectsActions.setEffects({}));

    navigate(`/page-${page}`);
  };

  const goNextPage = () => {
    const { pathname } = location;

    if (pathname === '/') {
      goToPage(1);

      return;
    }

    goToPage(currentPage + 1);
  };

  const goPrevPage = () => {
    const { pathname } = location;

    if (pathname === '/') {
      return;
    }

    goToPage(currentPage - 1);
  };

  return {
    goToPage,
    goNextPage,
    goPrevPage,
  };
}
