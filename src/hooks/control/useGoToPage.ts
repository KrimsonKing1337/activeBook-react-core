import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'store';

import { mainActions, mainSelectors } from 'store/main';

export function useGoToPage() {
  const dispatch = useDispatch();

  const currentPage = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);

  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    if (page === 0) {
      dispatch(mainActions.setPage(0));
      navigate('/');

      return;
    }

    dispatch(mainActions.setPage(page));
    navigate(`/page-${page}`);
  };

  const goNextPage = () => {
    const { pathname } = location;

    if (pathname === '/') {
      goToPage(1);

      return;
    }

    const nextIndex = currentPage + 1;

    if (nextIndex > pages) {
      return;
    }

    goToPage(nextIndex);
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
