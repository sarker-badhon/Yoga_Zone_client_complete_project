import React, { useState } from 'react';
import './DarkMode.css';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <h1 style={{ color: 'var(--text-color)' }}>Welcome to my website</h1>
      <p style={{ color: 'var(--text-color)' }}>This is some content.</p>
    </div>
  );
}

export default DarkMode;
