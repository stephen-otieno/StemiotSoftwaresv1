import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Sent:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page container">
      <header className="contact-header">
        <h1>Contact <span>Us</span></h1>
        <p>Have a project in mind? Let's build something amazing together.</p>
      </header>

      <div className="contact-wrapper">
        {/* Contact Information */}
        <div className="contact-info">
          
          <div className="info-item">
            <div className="info-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div>
              <h4>Email Us</h4>
              <p>info@stemiotsoftwares.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FontAwesomeIcon icon={faPhone} /></div>
            <div>
              <h4>Call Us</h4>
              <p>+254 115 598 800</p>
            </div>
          </div>

          <div 
            className="info-item whatsapp-link" 
            onClick={() => window.open('https://wa.me/254115598800', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className="info-icon"><FontAwesomeIcon icon={faWhatsapp} /></div>
            <div>
              <h4>WhatsApp</h4>
              <p>+254 115 598 800</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
            <div>
              <h4>Location</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Message Sent Successfully!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <select name="subject" required onChange={handleChange}>
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="payment">Payment Integration</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;