import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Dashboard from './views/dashboard';
import GroupedBarChart from './containers/groupedbarchart';
import MasterJob from './containers/masterjobs';
export default (
  <Route>
      <Route path="/" component= {App}>
      // <Route path="dash" component={ Dashboard }/>
      // <Route path="meta" component = { MasterJob }/>
     </Route>
  </Route>
);
