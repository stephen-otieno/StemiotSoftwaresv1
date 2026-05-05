import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css';

const Pricing = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Startup Lite",
      price: "25,000",
      description: "Perfect for small businesses needing a professional online presence.",
      features: ["5 Page Website", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"]
    },
    {
      name: "Business Pro",
      price: "65,000",
      description: "Advanced features for growing startups and digital platforms.",
      features: ["Unlimited Pages", "Database Integration", "M-Pesa Integration", "Admin Dashboard", "3 Months Support"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "150,000+",
      description: "Custom software solutions tailored for large-scale operations.",
      features: ["Custom Web App", "Mobile App (Android/iOS)", "Advanced Security", "Cloud Hosting Setup", "1 Year Support"]
    }
  ];

  const handleOrder = () => {
    navigate('/contact');
  };

  return (
    <div className="pricing-container container">
      <div className="pricing-header">
        <h1>Web Development <span>Packages</span></h1>
        <p>Transparent pricing tailored for the Kenyan tech ecosystem.</p>
      </div>

      <div className="pricing-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`pricing-card ${pkg.recommended ? 'active' : ''}`}>
            {pkg.recommended && <div className="badge">Most Popular</div>}
            <h2>{pkg.name}</h2>
            <div className="price">
              <span className="currency">KES</span>
              <span className="amount">{pkg.price}</span>
            </div>
            <p className="pkg-desc">{pkg.description}</p>
            
            <ul className="feature-list">
              {pkg.features.map((feature, i) => (
                <li key={i}>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon-check" />
                  {feature}
                </li>
              ))}
            </ul>

            <button onClick={handleOrder} className="btn-pricing">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;