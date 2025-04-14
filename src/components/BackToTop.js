import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button 
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '30px',
          padding: '10px 15px',
          fontSize: '1rem',
          backgroundColor: 'var(--btn-bg)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease'
        }}
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;