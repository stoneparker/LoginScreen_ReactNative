import React from 'react';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';

import useTheme from './src/utils/themeSwitch';

export default function App() {
  return (
    <ThemeProvider theme={useTheme()}>
      <Routes/>
    </ThemeProvider>
  );
}
