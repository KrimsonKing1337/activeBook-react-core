import { startTransition } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { mainActions } from 'store/main';

import { useDispatch } from 'store';

export function useGoToPage() {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    if (page === 0) {
      dispatch(mainActions.setPage(0));
      navigate('/');

      return;
    }

    startTransition(() => {
      dispatch(mainActions.setPage(page));
      navigate(`/page-${page}`);
    });
  };

  const goNextPage = () => {
    const { pathname } = location;

    if (pathname === '/') {
      goToPage(1);

      return;
    }

    const currentPage = Number(pathname.split('-')[1]);

    goToPage(currentPage + 1);
  };

  const goPrevPage = () => {
    const { pathname } = location;

    if (pathname === '/') {
      return;
    }

    const currentPage = Number(pathname.split('-')[1]);

    goToPage(currentPage - 1);
  };

  return {
    goToPage,
    goNextPage,
    goPrevPage,
  };
}
