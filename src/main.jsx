import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routes } from './routes';

import { CustomThemeProvider } from './components/context/CustomThemeProvider';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomThemeProvider>
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>
  </CustomThemeProvider>
)