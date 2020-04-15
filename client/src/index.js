import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#051937',
    },
    secondary: {
      main: '#49316f',
    }
  },
  typography: {
    fontFamily: [
      'Comfortaa' , 
      'cursive',
    ],
  },
});

console.log("theme", theme);

ReactDOM.render(

  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
