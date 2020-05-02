import React from 'react';
import logo from '../../logo.svg';
import './Home.css';

// TODO install Typescript

const Home = () => (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="home__logo" alt="logo" />
        <h1>Puzzle Pages</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );

export default Home;
