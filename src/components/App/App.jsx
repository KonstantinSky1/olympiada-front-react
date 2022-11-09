import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

// import PageWrapper from '../PageWrapper/PageWrapper';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Root from '../Root/Root';
import Main from '../Main/Main';
import News from '../News/News';
import PersonalAccountInfo from '../PersonalAccountInfo/PersonalAccountInfo';
import PersonalAccountAddBalance from '../PersonalAccountAddBalance/PersonalAccountAddBalance';
import PageNotFound from '../PageNotFound/PageNotFound';
import Promotions from '../Promotions/Promotions';
import NewsItemOpen from '../NewsItemOpen/NewsItemOpen';
import Support from '../Support/Support';
import PaymentKaspi from '../PaymentKaspi/PaymentKaspi';
import OpenToPlay from '../OpenToPlay/OpenToPlay';
import OlympiadStart from '../OlympiadStart/OlympiadStart';
import Rating from '../Rating/Rating';
import StudyAbroad from '../StudyAbroad/StudyAbroad';
import StudyAbroadOpenCard from '../StudyAbroadOpenCard/StudyAbroadOpenCard';
import WorkAbroad from '../WorkAbroad/WorkAbroad';
import Tutors from '../Tutors/Tutors';
import Courses from '../Courses/Courses';
import OpenCoursesCard from '../OpenCoursesCard/OpenCoursesCard';
import Tournaments from '../Tournaments/Tournaments';
import OnlineStudy from '../OnlineStudy/OnlineStudy';
// import Admin from '../Admin/Admin';

function App() {
  // Вынести routes в отдельный файл
  const routes = [
    {
      path: '/',
      element: <Root />,
      children: [
        // newsitemopen - временное решение!!!!
        {
          path: "newsitemopen",
          element: <NewsItemOpen />,
        },
        // ===================================
        // olympiadstart - временное решение!!!!
        {
          path: "olympiadstart",
          element: <OlympiadStart />,
        },
        // ===================================
        // studyabroadopencard - временное решение!!!!
        {
          path: "studyabroadopencard",
          element: <StudyAbroadOpenCard />,
        },
        // ===================================
        // opencoursescard - временное решение!!!!
        {
          path: "opencoursescard",
          element: <OpenCoursesCard />,
        },
        // ===================================
        // {
        //   path: "tournaments",
        //   element: <Tournaments />,
        // },
        {
          path: "onlinestudy",
          element: <OnlineStudy />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "tutors",
          element: <Tutors />,
        },
        {
          path: "workabroad",
          element: <WorkAbroad />,
        },
        {
          path: "studyabroad",
          element: <StudyAbroad />,
        },
        {
          path: "rating",
          element: <Rating />,
        },
        {
          path: "opentoplay",
          element: <OpenToPlay />,
        },
        {
          path: "kaspipayment",
          element: <PaymentKaspi />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "promotions",
          element: <Promotions />,
        },
        {
          path: "personalaccountaddballance",
          element: <PersonalAccountAddBalance />,
        },
        {
          path: "personalaccountinfo",
          element: <PersonalAccountInfo />,
        },
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
        },
        {
          path: "*",
          element: <PageNotFound />
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