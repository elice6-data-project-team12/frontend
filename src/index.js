import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import theme from 'style/theme.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </StyledEngineProvider>
);
