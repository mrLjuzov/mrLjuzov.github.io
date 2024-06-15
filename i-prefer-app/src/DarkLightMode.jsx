import { useState, useEffect } from 'react';

export const useDarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Detect browser dark mode preference
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeQuery.matches);

    const darkModeListener = (e) => setDarkMode(e.matches);
    darkModeQuery.addEventListener('change', darkModeListener);

    return () => darkModeQuery.removeEventListener('change', darkModeListener);
  }, []);

  return darkMode;
};
