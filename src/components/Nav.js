import React from 'react';
import './style/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <div className="logo">
          <span className="logoMath">Math</span>
          magician
        </div>
      </div>
      <nav className="navLinks">
        <Link to="/home">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </nav>
    </div>
  );
}

export default Nav;
