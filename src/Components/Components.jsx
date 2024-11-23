import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">MyApp</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
