import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

// import PageWrapper from '../PageWrapper/PageWrapper';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Root from '../Root/Root';
import Main from '../Main/Main';
import News from '../News/News';
// import Admin from '../Admin/Admin';

function App() {
  // Вынести routes в отдельный файл
  const routes = [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: "news",
          element: <News />,
        },
        {
          path: "signup",
          element: <Register />,
        },
        {
          path: "signin",
          element: <Login />,
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