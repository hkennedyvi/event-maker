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
        accessToken: '...', //fields will be subbed with actual tokens etc. in a sec 
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
  }
});






export default App;
