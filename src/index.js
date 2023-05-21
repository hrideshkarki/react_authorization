import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';


// import { ThemeProvider } from '@emotion/material/styles';
// import primaryTheme from "./themes/primaryTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <ThemeProvider theme={primaryTheme}> */}
      <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>
);