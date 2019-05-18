import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Login } from '../pages/login-register/login';
import Register from '../pages/login-register/register';

export const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Register} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)