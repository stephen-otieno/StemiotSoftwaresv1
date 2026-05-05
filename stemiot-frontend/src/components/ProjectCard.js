import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, name, description, link }) => {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="project-image" />
        <div className="overlay">
          <span>View Project</span>
        </div>
      </div>
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;