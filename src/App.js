import React, { useContext } from 'react';
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import View from './View';
import Create from './Create';
import { Edit } from './Edit';
import { LoginForm } from './Login';
import { NavBar } from './NavBar';
import { SignUpForm } from './Signup';

const App = (props) => {
  const { isLoggedIn } = useContext(ThemeContext);
  const Delete = () => {
    return <div> Del</div>;
  };

  const authRoutes = [
    { path: "/", element: <View /> },
    { path: "/view", element: <View /> },
    { path: "/delete", element: <Delete /> },
    { path: "/create", element: <Create /> },
    { path: "/edit/:id", element: <Edit /> },
    { path: "*", element: <Navigate to="/view" /> },
  ];

  const nonAuthRoute = [
    { path: "/", element: <LoginForm /> },
    { path: "/signup", element: <SignUpForm /> },
    { path: "*", element: <Navigate to="/" /> },
  ];

  return (
    <Router>
      {isLoggedIn && (
        <div style={{ width: "80%", backgroundColor: "grey", padding: 10, marginBottom: 50 }}>
          <NavBar />
        </div>
      )}

      <Routes>
        {isLoggedIn ? authRoutes.map((route) => <Route key={route.path} {...route} />) : nonAuthRoute.map((route) => <Route key={route.path} {...route} />)}
      </Routes>
    </Router>
  );
};

export { App };
