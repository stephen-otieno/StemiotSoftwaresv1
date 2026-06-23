import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Stemiot Logo" className="nav-logo" />
          <div className="logo-text">
            <span className="brand-name">Stemiot</span>
            <span className="brand-sub">Softwares</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact" className="btn-primary">Get Started</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
