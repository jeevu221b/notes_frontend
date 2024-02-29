import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from './ThemeContext'; // Import the context

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authToken, updatetAuthToken] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            updatetAuthToken(token)
            setIsLoggedIn(true)
            console.info("User is logged in")
        }
    }, [])



    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    const clearAuthToken = () => {
        localStorage.removeItem("token");
        updatetAuthToken(null)
        setIsLoggedIn(false)
    }

    const setAuthToken = (token) => {
        localStorage.setItem("token", token);
        updatetAuthToken(token)
        setIsLoggedIn(true)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, authToken, isLoggedIn, setAuthToken, clearAuthToken }}>
            {children}  
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;