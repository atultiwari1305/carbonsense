import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="CarbonSense India" className="logo-img" />
          <span className="logo-text">CarbonSense India</span>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/research" className="nav-link" onClick={toggleMenu}>
              Studies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/global" className="nav-link" onClick={toggleMenu}>
              Global View
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
