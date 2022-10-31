import React from "react";
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Register from '../Register/Register';

import Root from '../Root/Root';
import Admin from '../Admin/Admin';

function App() {
  const routes = [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: "signup",
          element: <Register />,
        },
        {
          index: true,
          element: <Main />
        },

      ],
    },
    {
      path: '/admin',
      element: <Admin />,

    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;