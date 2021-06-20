import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { EffectExamples } from 'pages/EffectExamples';

import { addTouchSupportForCssHover } from 'utils/touch/addTouchSupportForCssHover';
import { setCssVariable } from 'utils/setCssVariable';

export const App = () => {
  useEffect(() => {
    addTouchSupportForCssHover();

    setCssVariable('--main-content-height', `${window.innerHeight}px`);
  }, []);

  return (
    <Provider store={store}>
      <EffectExamples />
    </Provider>
  );
};
