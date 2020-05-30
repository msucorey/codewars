import React from 'react';
import logo from '../../logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="home__logo" alt="logo" />
        <h1>Puzzle Pages</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{`Why don't you check out our `}
          <Link to="/about" className="home__header__link">about</Link>{` page`}.
        </p>
      </header>
    </div>
  );

export default Home;
