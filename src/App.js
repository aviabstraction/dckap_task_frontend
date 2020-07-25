import React from 'react';

//Custom Imports

import { GlobalProvider, ThemeProvider } from './contexts';
import MainRouter from './routes';

export default function (props) {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <MainRouter />
      </ThemeProvider>
    </GlobalProvider>
  );
}
