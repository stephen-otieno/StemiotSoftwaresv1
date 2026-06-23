import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="Stemiot Logo" className="nav-logo" />
          <div className="logo-text">
            <span className="brand-name">Stemiot</span>
            <span className="brand-sub">Softwares</span>
          </div>
        </Link>

        <div className="nav-actions-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" className="btn-primary" onClick={closeMenu}>Get Started</Link></li>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle UI Theme Mode"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.3rem',
              cursor: 'pointer',
              color: 'var(--text-main)',
              transition: 'transform 0.2s ease'
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;