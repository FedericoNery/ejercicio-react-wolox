import './App.css';
import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/RoutesComponents/PrivateRoute'
import PublicRoute from './components/RoutesComponents/PublicRoute';
import ErrorBoundary from './components/ErrorBoundary';
const App = () => {

  const ListPage = React.lazy(() => import('./components/ListPage'));
  const RegisterPage = React.lazy(() => import('./components/RegisterPage'));
  const LandingPage = React.lazy(() => import('./components/LandingPage'));


  return (<>
    <Header />
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </ErrorBoundary>
    </Router>
  </>
  );
}

export default App;
