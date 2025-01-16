import './BlogPosts.css';   

import React, { useState, useEffect } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/BlogPosts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the data for debugging
        if (data.blogPosts && Array.isArray(data.blogPosts)) {
          setPosts(data.blogPosts); // Access the "blogPosts" array
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
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>Loading blog posts or no posts available...</p>
      ) : (
        <div className="blog-posts">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.image} alt={post.heading} />
              <h2>{post.heading}</h2>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPosts;

