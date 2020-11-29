import './App.css';
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import ListPage from './components/ListPage';
import Header from './components/Header';
import PrivateRoute from './components/RoutesComponents/PrivateRoute'
import PublicRoute from './components/RoutesComponents/PublicRoute';
const App = () => {
  return (<>
      <Header />
      <Router>
        <Switch>
          <Route path="/list">
            <PrivateRoute component={ListPage} />
          </Route>
          <Route path="/register">
            <PublicRoute restricted={true} component={RegisterPage} />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
  </>
  );
}

export default App;
