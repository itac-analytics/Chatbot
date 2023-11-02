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
        
          Learn React
        
      </header>
    </div>
  );
}

/*export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      {/* Add more routes for other pages }
    </Router>
  );
}

export default App;
*?
