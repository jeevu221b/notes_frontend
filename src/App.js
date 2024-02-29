import React, { useContext, useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
} from "react-router-dom";

import { LoginForm } from './Login';
import {
  RouterProvider,
} from "react-router-dom";
import ThemeContext from './ThemeContext';
import { useLocation } from 'react-router-dom';


const App = (props) => {
  const { theme, toggleTheme, isLoggedIn } = useContext(ThemeContext);



  const View = () => {

    return <div> VIEW</div>

  }

  const Delete = () => {

    return <div> Del</div>

  }


  const authRoutes = [{
    path: "/",
    element: <LoginForm />
  },

  {

    path: "/view",
    element: <View />
  }, {
    path: "/delete",
    element: <Delete />
  },
  {
    path: "*",
    element: <div>Home Page of Auth route. You are logged in </div>
  }
  ]


  const nonAuthRoute = [{
    path: "/",
    element: <LoginForm />
  }, {
    path: "/signup",
    element: <div>Sign up</div>
  },
  {
    path: "*",
    element: <LoginForm />
  }
  ]


  const router = createBrowserRouter(
    isLoggedIn ? authRoutes : nonAuthRoute
  )



  return (
    <RouterProvider router={router} />
  )


}
export { App };
