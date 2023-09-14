import { PropsWithChildren } from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { initialState } from 'store/main/slice';

// todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
// todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
// const Page1 = React.lazy(() => import('pagesOfBook/Page1'));

const getPageComponents = () => {
  const { pages } = initialState;

  const arr = [];

  for (let i = 0; i <= pages; i++) {
    const PageComponent = require(`pages/Page${i}`)[`Page${i}`];

    arr.push(PageComponent);
  }

  return arr;
};

export const Routes = ({ children }: PropsWithChildren<unknown>) => {
  const pageComponents = getPageComponents();

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
