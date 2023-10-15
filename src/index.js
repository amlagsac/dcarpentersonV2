import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Copperplate, "Copperplate Gothic Light", fantasy'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
