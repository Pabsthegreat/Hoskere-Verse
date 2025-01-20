import React from "react";
import "./Projectiles.css";

const ProjectTile = ({ project }) => {
  return (
    <div className="project-tile">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags?.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer">
        <button className="see-more-btn">See More</button>
      </a>
    </div>
  );
};

export default ProjectTile;
