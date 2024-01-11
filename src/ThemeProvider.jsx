// ThemeProvider.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  body: '#fff',
  text: '#0d0d0d',
};

const darkTheme = {
  body: '#0d0d0d',
  text: '#fff',
};

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children({ darkMode, toggleDarkMode })}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
