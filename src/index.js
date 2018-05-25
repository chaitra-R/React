import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import App from './containers/app';
import store from "./store";


render(
  <Provider store={store}>
   <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.querySelector('.container123')

)
//provider gives store to ur whole application,this is how we conncet out store to app//
