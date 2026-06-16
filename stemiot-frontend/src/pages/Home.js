import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import { 
  faCode, 
  faMobileAlt, 
  faDatabase, 
  faCreditCard,
  faExternalLinkAlt,
  faArrowRight
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

  // Dynamic Portfolio Projects list
  const featuredProjects = [
    {
      title: "SmartSave Fintech",
      tags: ["React", "Node.js", "M-Pesa API"],
      desc: "A high-performance micro-savings app featuring automated STK Push payment logic.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "ElectroMart E-Commerce",
      tags: ["MongoDB", "Express", "Redux"],
      desc: "A scalable digital marketplace optimized for lightning-fast product filtering and checkouts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Stemiot Fleet Tracker",
      tags: ["IoT Hardware", "Websockets", "React"],
      desc: "Real-time telemetry and mapping monitoring system handling concurrent stream data.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
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

      {/* NEW: Portfolio Section */}
      <section className="portfolio-featured">
        <div className="container">
          <div className="section-title">
            <h2>Featured <span>Projects</span></h2>
            <p>A handpicked gallery of our production-ready builds.</p>
          </div>
          
          <div className="portfolio-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <Link to="/portfolio" className="overlay-icon">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Link>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-tags">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="view-more-container">
            <Link to="/portfolio" className="btn-view-more">
              Explore Entire Portfolio <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;