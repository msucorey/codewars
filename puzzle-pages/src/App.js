import React from 'react';
import logo from './logo.svg';
import './App.css';

// TODO install Typescript

const App = () => (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <h1>Puzzle Pages</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );

export default App;
