import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import SIgnup from './pages/SIgnup';
import Login from './pages/Login';
import Logout from './components/Logout/Logout';
import Profile from './pages/Profile';
import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Wrapper/>
        <Switch>
          <Route exact path="/">
            <SIgnup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/myprofile">
            <Profile />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
