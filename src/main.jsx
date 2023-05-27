import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routes } from './routes';

import { CustomDataProvider } from './components/context/CustomDataProvider';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomDataProvider>
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>
  </CustomDataProvider>
)