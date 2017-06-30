import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';

export default function App() {
  /* Switch
   * Renders the first child <Route> or <Redirect> that matches the location.
   */
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="whomst" component={PageNotFound} />
    </Switch>
  );
}
