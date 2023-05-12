import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routes } from './routes';

import { ThemeProvider } from "styled-components";

const theme = {
  main: 'red'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)