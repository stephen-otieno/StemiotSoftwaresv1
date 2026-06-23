import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layout Global Components
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

// Page Views
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Pricing from './pages/Pricing'; 
import Blog from './pages/Blog';       
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar /> 
        
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

      </Router>
    </ThemeProvider>
  );
}

export default App;