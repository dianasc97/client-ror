import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from './screens/Index';
import Movies from './screens/Movies';
import NewMovie from './screens/NewMovie';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/newmovie" component={NewMovie} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
