import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import ListPage from './components/ListPage';
import Header from './components/Header';


function App() {
  return (<>
    <Header />
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <RegisterPage />
        </Route>
        <Route path="/topics">
          <ListPage />
        </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
