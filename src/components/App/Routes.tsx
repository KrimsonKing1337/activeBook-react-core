import { type PropsWithChildren, lazy } from 'react';

import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { mainSelectors } from 'store/main';

import { useSelector } from 'store';

// todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
// todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
// const Page1 = React.lazy(() => import('pagesOfBook/Page1'));

const getPageComponents = (pages: number) => {
  const arr = [];

  for (let i = 0; i <= pages; i++) {
    const PageComponent = lazy(() =>
      import(`pages/Page${i}`).then((m) => {
        window.dispatchEvent(new CustomEvent('pageChunkLoaded', { detail: { i } }));

        return m;
      }),
    );

    arr.push(PageComponent);
  }

  return arr;
};

export const Routes = ({ children }: PropsWithChildren<unknown>) => {
  const pages = useSelector(mainSelectors.pages);

  const pageComponents = getPageComponents(pages);

  return (
    <ReactRouterRoutes>
      <Route path="/" element={children} />

      {pageComponents.map((PageComponent, i) => {
        return (
          <Route path={`/page-${i}`} key={i} element={<PageComponent />} />
        );
      })}
    </ReactRouterRoutes>
  );
};
