import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Login } from '../pages/login';

export const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)