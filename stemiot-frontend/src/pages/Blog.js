import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Ensure your backend is running on Port 5000
        const response = await axios.get('http://localhost:5000/api/blogs');
        console.log("Blogs Fetched:", response.data);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="container" style={{padding: '100px', textAlign: 'center'}}><h3>Loading Insights...</h3></div>;

  return (
    <div className="blog-page container">
      <header className="blog-header">
        <h1>Tech <span>Insights</span></h1>
        <p>Stay updated with the latest in software engineering and fintech trends.</p>
      </header>

      {posts.length === 0 ? (
        <div style={{textAlign: 'center', color: 'var(--text-muted)'}}>
          <p>No blogs found. Please check your database connection or run the seeder.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post._id} className="blog-card">
              <div className="blog-image">
                {/* Fallback to a placeholder if image URL is broken */}
                <img src={post.image || "https://via.placeholder.com/400x200"} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><FontAwesomeIcon icon={faUser} /> {post.author}</span>
                  <span>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more">
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;