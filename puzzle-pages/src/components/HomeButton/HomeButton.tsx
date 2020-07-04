import * as React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = ({ className = '', label = 'Home'}) => (
    <button className={`home-button ${className}`}>
      <Link to="/">{label}</Link>
    </button>
  );

export default HomeButton;
