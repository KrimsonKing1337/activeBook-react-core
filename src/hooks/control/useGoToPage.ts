import { startTransition } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

export function useGoToPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    startTransition(() => {
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
