import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const Auth = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Points strictly to the login route now
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      
      localStorage.setItem('token', response.data.token);
      setMessage({ text: 'Access Granted! Redirecting...', type: 'success' });
      setTimeout(() => navigate('/admin'), 1500);
    } catch (err) {
      setMessage({ 
        text: err.response?.data?.message || 'Invalid Credentials.', 
        type: 'error' 
      });
    }
  };

  return (
    <div className="auth-container container">
      <div className="auth-card">
        <h2>Admin <span>Login</span></h2>
        
        {message.text && (
          <p className={`auth-message ${message.type === 'success' ? 'success-msg' : 'error-msg'}`}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Secure Email Address</label>
            <input 
              type="email" 
              placeholder="admin@stemiot.com" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Master Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              required 
            />
          </div>

          <button type="submit" className="btn-auth">Access System Panel</button>
        </form>

        <p className="auth-toggle" style={{ fontSize: '0.8rem', opacity: 0.5 }}>
          Authorized personnel only. All access attempts are logged.
        </p>
      </div>
    </div>
  );
};

export default Auth;