import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import { 
  faCode, 
  faMobileAlt, 
  faDatabase, 
  faCreditCard 
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: faCode,
      title: "Web Development",
      desc: "Custom, responsive web applications built with the MERN stack for maximum performance."
    },
    {
      icon: faMobileAlt,
      title: "Mobile Apps",
      desc: "Cross-platform mobile solutions that provide seamless user experiences on iOS and Android."
    },
    {
      icon: faDatabase,
      title: "Database Optimization",
      desc: "Structuring and tuning your data layers for speed, security, and scalability."
    },
    {
      icon: faCreditCard,
      title: "Payment Integration",
      desc: "Specialized in M-Pesa G2 and STK Push integrations for the Kenyan digital market."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-flex">
          <div className="hero-text">
            <h1>Innovating the Future with <span className="gradient-text">Stemiot Softwares</span></h1>
            <p>We craft high-performance digital solutions that scale your business. From full-stack web apps to seamless payment integrations.</p>
            <div className="hero-btns">
              <Link to="/portfolio" className="btn-primary">View Our Work</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Tech Setup" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Services</span></h2>
            <p>Expert solutions tailored to your technical needs.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;