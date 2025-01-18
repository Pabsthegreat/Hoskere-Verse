import React from "react";
import "./Projectiles.css";
const Projectiles = ({ projects }) => {
    return (
        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project-tile" key={project.id}>
                    <img src={project.image} alt={project.name} className="project-image" />
                    <div className="project-content">
                        <h3 className="project-title">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="see-more-link" target="_blank" rel="noopener noreferrer">
                            See More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Projectiles;
