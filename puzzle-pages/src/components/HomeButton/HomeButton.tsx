import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  className?: string;
  label?: string;
};

const HomeButton: React.FC<Props> = ({ className = '', label = 'Home'}) => (
    <button className={`home-button ${className}`}>
      <Link to="/">{label}</Link>
    </button>
  );

export default HomeButton;
