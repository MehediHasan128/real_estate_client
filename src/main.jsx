import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Roboto Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';

// Responsive font
import { ThemeProvider } from '@emotion/react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme();
theme = responsiveFontSizes(theme);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
