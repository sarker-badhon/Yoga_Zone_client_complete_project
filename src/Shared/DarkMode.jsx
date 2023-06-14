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
     
    </div>
  );
}

export default DarkMode;
