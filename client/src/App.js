import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './components/Logout/Logout';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
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
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
