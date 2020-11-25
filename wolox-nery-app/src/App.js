import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import ListPage from './components/ListPage';
import Header from './components/Header';

const App = () => {
  return (<>
    <Header />
    <Router>
      <Switch>
        <Route path="/list">
          <ListPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
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
