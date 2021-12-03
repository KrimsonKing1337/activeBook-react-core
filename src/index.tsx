import React from 'react';
import { render } from 'react-dom';

import { App } from 'components/App';

/// #if lib != true
import { EffectExamples } from 'pages/EffectExamples';
/// #endif

import { getIsMobile } from 'utils/getIsMobile';

import 'modern-css-reset/dist/reset.min.css';
import 'styles/reset.scss';
import 'styles/fonts.scss';

function initApp(component: React.ReactNode) {
  render(<App>{component}</App>, document.getElementById('root'));
}

export function init(component: React.ReactNode) {
  const isMobile = getIsMobile();

  if (isMobile) {
    document.addEventListener('deviceready', initApp, false);
  } else {
    initApp(component);
  }
}

// prevent refreshing whole page, see: https://github.com/gaearon/react-hot-loader/issues/422
if (module.hot) {
  module.hot.accept();
}

/// #if lib != true
init(<EffectExamples />);
/// #endif
