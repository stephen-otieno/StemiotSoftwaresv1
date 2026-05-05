import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetching from the endpoint we created in the backend
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ padding: '100px', textAlign: 'center' }}>
        <h3>Fetching Our Showcase...</h3>
      </div>
    );
  }

  return (
    <div className="portfolio-page container">
      <div className="portfolio-header">
        <h1>Our <span>Showcase</span></h1>
        <p>A glimpse into the innovative solutions built by Stemiot Softwares.</p>
      </div>
      
      {projects.length === 0 ? (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <p>No projects found. Use the seeder to populate the portfolio.</p>
        </div>
      ) : (
        <div className="portfolio-grid">
          {projects.map((proj) => (
            <ProjectCard 
              key={proj._id} // Using MongoDB's unique ID
              image={proj.image}
              name={proj.name}
              description={proj.description}
              link={proj.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;