
import './Projects.css';
import Projectcarousel from './Projectcarousel';
import Projectiles from './Projectiles';

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
            <h1>My Projects</h1>
            <Projectcarousel projects={posts} />
            <Projectiles projects={posts} />
        </div>
    );
};

export default Projects;

