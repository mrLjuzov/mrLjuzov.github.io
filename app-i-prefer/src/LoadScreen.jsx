import React, { useState, useEffect } from 'react';
import './LoadScreen.css';
import loadLogoLight from '/src/assets/IPAppLogoLightMode.png';
import loadLogoDark from '/src/assets/IPAppLogoDarkMode.png';
import { useDarkLightMode } from './DarkLightMode.jsx';

function LoadScreen({ onLoaded }) {
  const darkMode = useDarkLightMode();
  const [showSkip, setShowSkip] = useState(true);

  // Timer to automatically hide after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(false); // Hide skip option after 5 seconds
      onLoaded(); // Notify parent component (App) that LoadScreen has finished
    }, 3500); // 3500 milliseconds = 3.5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onLoaded]);

  // Skip loading screen function
  const handleSkip = () => {
    setShowSkip(false);
    onLoaded(); // Notify parent component (App) to skip LoadScreen
  };

  // Handle spacebar press to skip
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && showSkip) {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showSkip]); // Show skip button dependency

  return (
    <div className={`load-screen ${darkMode ? 'dark-mode dark-mode-text' : 'light-mode light-mode-text'}`}>
      <img src={darkMode ? loadLogoDark : loadLogoLight} alt="Logo" />
      {showSkip && (
        <div className="skip-text">
          Press <span className="space-word">Space</span> to skip
        </div>
      )}
    </div>
  );
}

export default LoadScreen;
