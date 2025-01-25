import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./BlogPosts.css";

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch("/data/BlogPosts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.blogs && Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          console.error("Fetched data does not contain 'blogs' array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const handleViewMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blogposts-page">
      <Helmet>
        <title>{selectedBlog ? selectedBlog.title : "Blog Posts"}</title>
        <meta name="description" content="Read our latest blog posts on various topics." />
      </Helmet>
      <h1 className="blogposts-heading">Blog Posts</h1>
      {selectedBlog ? (
        <article className="selected-blog">
          <h2 className="blog-title">{selectedBlog.title}</h2>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="blog-image"
          />
          <p className="blog-fulltext">{selectedBlog.fulltext}</p>
          <button className="blog-button" onClick={handleBack}>
            Back to All Posts
          </button>
          <h3 className="other-blogs-heading">Other Blogs:</h3>
          <div className="other-blogs-grid">
            {blogs
              .filter((blog) => blog.id !== selectedBlog.id)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="other-blog-tile"
                  onClick={() => handleViewMore(blog)}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="other-blog-image"
                  />
                  <h4 className="other-blog-title">{blog.title}</h4>
                </div>
              ))}
          </div>
        </article>
      ) : (
        <section className="blogs-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-tile">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
              />
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
                <button
                  className="blog-button"
                  onClick={() => handleViewMore(blog)}
                >
                  View More
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};

export default BlogPosts;
