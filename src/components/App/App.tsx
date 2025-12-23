import { type PropsWithChildren, Suspense } from 'react';

import { MemoryRouter } from 'react-router-dom';

import type { RangeEffects, Config, TableOfContents } from '@types';

import { StoreProvider } from 'store';

import { AppWrapper } from 'components/AppWrapper';

import { Routes } from './Routes';

export type AppProps = {
  config: Config;
  tableOfContents: TableOfContents;
  rangeEffects: RangeEffects;
};

export const App = ({ children, config, tableOfContents, rangeEffects }: PropsWithChildren<AppProps>) => {
  return (
    <StoreProvider>
      <MemoryRouter>
        <AppWrapper config={config} tableOfContents={tableOfContents} rangeEffects={rangeEffects}>
          <Suspense fallback={null}>
            <Routes>
              {children}
            </Routes>
          </Suspense>
        </AppWrapper>
      </MemoryRouter>
    </StoreProvider>
  );
};
