import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Roboto Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';

// Responsive font
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme();
theme = responsiveFontSizes(theme);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
