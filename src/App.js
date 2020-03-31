import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


//inputting check of login status 
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  //inputting response object field 
  {
    status: 'connected',
    authResponse: {
        accessToken: 'EAADCnmetEcABAInzZARwG9vEiUCJr3cfgMukkyg97qb93jeY9c6AbcnLHEL2dJeK7SfHBZBLIRE3S9oEqOvdz9F', //fields will be subbed with actual tokens etc. in a sec 
        expiresIn:'	1585267200',
        signedRequest:'...',
        userID:'3443546028994214'
    }
  }
});

//call to get most recent login state
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}




export default App;
