import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)

serviceWorker.unregister();
