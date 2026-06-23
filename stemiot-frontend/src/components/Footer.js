import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
 return (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="logo-container">
          <img src={logo} alt="Stemiot Logo" className="nav-logo" />
          <div className="logo-text">
            <span className="brand-name">Stemiot</span>
            <span className="brand-sub">Softwares</span>
          </div>
        </div>
        <p className="footer-tagline">
          Innovating the future through scalable web solutions and secure payment integrations.
        </p>
        <div className="social-icons">
          <a href="https://wa.me/254115598800" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://www.facebook.com/profile.php?id=100065310971717" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.linkedin.com/in/stephen-otieno-9a2833306/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://x.com/Engineerotienos" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>

      <div className="footer-columns-wrapper">
        {/* Left Side: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Tech Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Side: Get in Touch */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@stemiotsoftwares.com</p>
          <p><FontAwesomeIcon icon={faWhatsapp} /> 0115598800</p>
          <p><FontAwesomeIcon icon={faPhone} /> +254 115 598 800</p>
          <p><FontAwesomeIcon icon={faLocation} /> Nairobi, Kenya</p>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Stemiot Softwares. All Rights Reserved.</p>
    </div>
  </footer>
);
};

export default Footer;