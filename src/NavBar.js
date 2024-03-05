import React, { useContext } from 'react';
import { apiRequest } from './utill';
import ThemeContext from './ThemeContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const { clearAuthToken } = useContext(ThemeContext)

    async function handleLogout() {
        await apiRequest("/api/logout/", "POST")
        clearAuthToken()
    }

    function handleCreate() {
        navigate("/create")

    }

    return (
        <div>
            <button onClick={handleLogout}>
                Logout
            </button>
            <button onClick={handleCreate}>
                Create
            </button>
        </div>
    );
};

export { NavBar }
