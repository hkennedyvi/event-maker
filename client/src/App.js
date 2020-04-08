import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/SIgnup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Wrapper/>
        <Switch>
          <Route exact path="/">
            <Signup />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
