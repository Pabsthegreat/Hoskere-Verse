import React, { useState, useEffect } from "react";
import Carousel from "./Projectcarousel";
import ProjectTile from "./Projectiles";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({ tags: [], search: "" });
  const [displayedProjects, setDisplayedProjects] = useState([]);

  useEffect(() => {
    fetch("data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setDisplayedProjects(data.projects);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const toggleFilter = (filter) => {
    setFilters((prev) => {
      const updatedTags = prev.tags.includes(filter)
        ? prev.tags.filter((tag) => tag !== filter)
        : [...prev.tags, filter];
      return { ...prev, tags: updatedTags };
    });
  };

  const handleSearch = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value.toLowerCase() }));
  };

  useEffect(() => {
    let filteredProjects = projects;

    if (filters.tags.length > 0) {
      filteredProjects = filteredProjects.filter((project) =>
        filters.tags.every((tag) => project.tags?.includes(tag))
      );
    }

    if (filters.search) {
      filteredProjects = filteredProjects.filter((project) =>
        project.title.toLowerCase().includes(filters.search)
      );
    }

    setDisplayedProjects(filteredProjects);
  }, [filters, projects]);

  return (
    <div className="projects-page">
        <h3>Explore Projects</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search projects..."
          value={filters.search}
          onChange={handleSearch}
        />
      </div>
      <div className="filter-section">
        <Carousel
          title="Filter by Language/Framework"
          filters={["React", "Node.js", "Python", "CSS", "MongoDB"]}
          selectedFilters={filters.tags}
          onToggleFilter={toggleFilter}
        />
        <Carousel
          title="Filter by Topic"
          filters={["AI & ML", "Full Stack", "Game Development", "Frontend", "Backend", "Mobile", "Web"]}
          selectedFilters={filters.tags}
          onToggleFilter={toggleFilter}
        />
        <Carousel 
            title="Filter by Purpose"
            filters={["Class Project", "Personal Project", "Hackathon", "Startup", "Freelance"]}
            selectedFilters={filters.tags}
            onToggleFilter={toggleFilter}
        />
      </div>

      {filters.tags.length > 0 && (
        <div className="active-filters">
          {filters.tags.map((filter) => (
            <span
              key={filter}
              className="filter-tag"
              onClick={() => toggleFilter(filter)}
            >
              #{filter} ✕
            </span>
          ))}
        </div>
      )}

      {displayedProjects.length > 0 ? (
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="no-projects">
          Looking for a new Idea? <br /> Contact me, we can make it happen!
        </div>
      )}
    </div>
  );
};

export default Projects;
