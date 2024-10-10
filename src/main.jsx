// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './index.css'



let theme = createTheme({
  palette: {
    primary: {
      main: "#658ef0",
    },
    secondary: {
      main: "#f9fcfd",
    },
    text: {
      main: "#c9e7f3",
    },
    button: {
      main: "#649dfa",
    },
  },
  typography: {
    fontFamily: `"Bungee Shade"', '"Roboto Condensed", "Barlow Condensed"`,
  },
});

theme = responsiveFontSizes(theme);

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  
    <App />
   
  </ThemeProvider>,
)
