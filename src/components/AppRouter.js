import React from 'react'
import Home from './Home';
import createHistory from 'history/createBrowserHistory';
// import Portfolio from './Portfolio';
import EditExpensePage from './EditExpensePage';
import NotFoundPage from './NotFoundPage';
import ReduxExpensify from './ReduxExpensify'
import { Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Contact  from './Contact';
import LoginPage from './LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

function AppRouter() {
  return (
 <Router history={history}>
      <Switch>
      <PublicRoute path="/" exact component={LoginPage} />
      <PrivateRoute path="/home" exact component={Home} />
      <PrivateRoute path="/redux" exact component={ReduxExpensify} />
      <PrivateRoute path="/contact" component={Contact} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route  component={NotFoundPage} />
      </Switch>
  
    </Router>
    
  )
}
   // <Route path="/portfolio" exact component={Portfolio} />
  export default AppRouter;