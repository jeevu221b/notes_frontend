import React, { createContext } from 'react';

const ThemeContext = createContext({
    theme: 'light', // Default theme
    isLoggedIn: false,
    toggleTheme: () => { }, // Placeholder function
});

export default ThemeContext;