import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tektur, sans-serif;
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme: DefaultTheme = {
    colors: {
        primary: 'green',
        secondary: 'white'
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 700px) and (min-width: 425px)'
    }
}

root.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App/>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
