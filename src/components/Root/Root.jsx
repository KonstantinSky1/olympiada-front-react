import React from "react";
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function Root() {
  return (
    <>
    <Header />
    <Navigation />
    <Outlet />
    <Footer />
    </>
  );
}

export default Root;