import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <Switch>
      { /* Redirects a user to /home */ }
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />;
        }}
      />
      <Route path="/home" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
