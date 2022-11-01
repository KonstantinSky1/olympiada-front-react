import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

// import PageWrapper from '../PageWrapper/PageWrapper';
import Register from '../Register/Register';

import Root from '../Root/Root';
import Main from '../Main/Main';
// import Admin from '../Admin/Admin';

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
          path: "/",
          element: <Main />
        }
        // {
        //   index: true,
        //   element: <PageWrapper />
        // },

      ],
    },
    // {
    //   path: '/admin',
    //   element: <Admin />,

    // }
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;