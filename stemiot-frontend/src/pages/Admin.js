import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [blogData, setBlogData] = useState({ title: '', excerpt: '', content: '', category: '', image: '' });
  const [projectData, setProjectData] = useState({ name: '', description: '', link: '', image: '' });
  const [message, setMessage] = useState('');

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', blogData);
      setMessage('Blog posted successfully!');
      setBlogData({ title: '', excerpt: '', content: '', category: '', image: '' });
    } catch (err) {
      setMessage('Error posting blog.');
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', projectData);
      setMessage('Project added successfully!');
      setProjectData({ name: '', description: '', link: '', image: '' });
    } catch (err) {
      setMessage('Error adding project.');
    }
  };

  return (
    <div className="admin-container container">
      <h1>Admin <span>Dashboard</span></h1>
      {message && <p className="status-message">{message}</p>}

      <div className="admin-grid">
        {/* Blog Form */}
        <section className="admin-section">
          <h2>Upload New Blog</h2>
          <form onSubmit={handleBlogSubmit}>
            <input type="text" placeholder="Title" value={blogData.title} onChange={(e) => setBlogData({...blogData, title: e.target.value})} required />
            <input type="text" placeholder="Category" value={blogData.category} onChange={(e) => setBlogData({...blogData, category: e.target.value})} required />
            <input type="text" placeholder="Image URL" value={blogData.image} onChange={(e) => setBlogData({...blogData, image: e.target.value})} required />
            <textarea placeholder="Excerpt" value={blogData.excerpt} onChange={(e) => setBlogData({...blogData, excerpt: e.target.value})} required />
            <textarea placeholder="Full Content" value={blogData.content} onChange={(e) => setBlogData({...blogData, content: e.target.value})} required />
            <button type="submit" className="btn-primary">Publish Blog</button>
          </form>
        </section>

        {/* Project Form */}
        <section className="admin-section">
          <h2>Add New Project</h2>
          <form onSubmit={handleProjectSubmit}>
            <input type="text" placeholder="Project Name" value={projectData.name} onChange={(e) => setProjectData({...projectData, name: e.target.value})} required />
            <input type="text" placeholder="Deployment Link" value={projectData.link} onChange={(e) => setProjectData({...projectData, link: e.target.value})} required />
            <input type="text" placeholder="Image URL" value={projectData.image} onChange={(e) => setProjectData({...projectData, image: e.target.value})} required />
            <textarea placeholder="Description" value={projectData.description} onChange={(e) => setProjectData({...projectData, description: e.target.value})} required />
            <button type="submit" className="btn-primary">Add Project</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Admin;