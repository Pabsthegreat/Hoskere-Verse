
import './Projects.css';

import React, { useState, useEffect } from "react";

const Projects = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/Projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the data for debugging
        if (data.projects && Array.isArray(data.projects)) {
          setPosts(data.projects); // Access the "blogPosts" array
        } else {
          console.error("Fetched data does not contain 'blogPosts' array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {posts.length === 0 ? (
        <p>Loading projects</p>
      ) : (
        <div className="projects">
          {posts.map((post) => (
            <div key={post.id} className="project">
              <img src={post.image} alt={post.heading} />
              <h2>{post.heading}</h2>
              <p>{post.description}</p>
              <p>{post.link}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;

