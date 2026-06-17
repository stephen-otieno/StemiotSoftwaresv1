import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const API = axios.create({
  baseURL: API_BASE_URL
});

const Admin = () => {
  const [blogData, setBlogData] = useState({ title: '', excerpt: '', content: '', category: '', image: '' });
  const [projectData, setProjectData] = useState({ name: '', description: '', link: '', image: '' });
  const [message, setMessage] = useState('');

  // Auto-compressing handler to downscale image size and bypass 413 server errors
  const handleFileChange = (e, targetForm) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 700; 
        const scaleSize = MAX_WIDTH / img.width;
        
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);

        if (targetForm === 'blog') {
          setBlogData({ ...blogData, image: compressedBase64 });
        } else if (targetForm === 'project') {
          setProjectData({ ...projectData, image: compressedBase64 });
        }
      };
    };
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/blogs', blogData); 
      setMessage('Blog posted successfully!');
      setBlogData({ title: '', excerpt: '', content: '', category: '', image: '' });
      e.target.reset(); 
    } catch (err) {
      console.error(err);
      setMessage('Error posting blog.');
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/projects', projectData);
      setMessage('Project added successfully!');
      setProjectData({ name: '', description: '', link: '', image: '' });
      e.target.reset(); 
    } catch (err) {
      console.error(err);
      setMessage('Error adding project.');
    }
  };

  return (
    <div className="admin-container container">
      <h1>Admin <span>Dashboard</span></h1>
      {message && <p className="status-message">{message}</p>}

      <div className="admin-grid">
        {/* Blog Upload Section */}
        <section className="admin-section">
          <h2>Upload New Blog</h2>
          <form onSubmit={handleBlogSubmit}>
            <input type="text" placeholder="Title" value={blogData.title} onChange={(e) => setBlogData({...blogData, title: e.target.value})} required />
            <input type="text" placeholder="Category" value={blogData.category} onChange={(e) => setBlogData({...blogData, category: e.target.value})} required />
            
            <div className="file-upload-group">
              <label>Cover Image:</label>
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'blog')} required />
            </div>

            <textarea placeholder="Excerpt" value={blogData.excerpt} onChange={(e) => setBlogData({...blogData, excerpt: e.target.value})} required />
            <textarea placeholder="Full Content" value={blogData.content} onChange={(e) => setBlogData({...blogData, content: e.target.value})} required />
            <button type="submit" className="btn-primary">Publish Blog</button>
          </form>
        </section>
        
        {/* New Project Upload */}
        <section className="admin-section">
          <h2>Add New Project</h2>
          <form onSubmit={handleProjectSubmit}>
            <input type="text" placeholder="Project Name" value={projectData.name} onChange={(e) => setProjectData({...projectData, name: e.target.value})} required />
            <input type="text" placeholder="Deployment Link" value={projectData.link} onChange={(e) => setProjectData({...projectData, link: e.target.value})} required />
            
            <div className="file-upload-group">
              <label>Project Image:</label>
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'project')} required />
            </div>

            <textarea placeholder="Description" value={projectData.description} onChange={(e) => setProjectData({...projectData, description: e.target.value})} required />
            <button type="submit" className="btn-primary">Add Project</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Admin;