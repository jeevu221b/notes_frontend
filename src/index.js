import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ContextProvider';
import { App } from './App';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>

  </React.StrictMode >,
  rootElement
);