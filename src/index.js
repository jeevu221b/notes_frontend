import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ContextProvider';
import { App } from './App';
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react"
import { config } from "./utill"

const honeybadger = Honeybadger.configure(config)
window.honeybadger = honeybadger

const rootElement = document.getElementById('root');


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
      <HoneybadgerErrorBoundary honeybadger={honeybadger}>
        <App />
      </HoneybadgerErrorBoundary>
    </ThemeProvider>

  </React.StrictMode >,
  rootElement
);