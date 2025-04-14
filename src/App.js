import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';
import './styles.css'; // Ensure the CSS is getting imported
// import HeaderImage from './assets/header.jpg'; // Removed as file does not exist

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Router>
      <header className="header">
        <h1>My Blog</h1>
        <p className="description">
          Sharing insights on coding, technology, and innovation!
        </p>
        <ThemeToggle />
        {/* Using the new image URL */}
        <img 
          src="https://canto-wp-media.s3.amazonaws.com/app/uploads/2019/08/19194138/image-url-3.jpg" 
          alt="Header" 
          loading="lazy" 
          style={{ 
            width: '40%',         // 40% of the container's width
            maxWidth: '400px',     // Maximum width restricted to 400px
            height: 'auto',        // Maintaining aspect ratio
            marginTop: '10px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }} 
        />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <BackToTop />
    </Router>
  );
};

export default App;