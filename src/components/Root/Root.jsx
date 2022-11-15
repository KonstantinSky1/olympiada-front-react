import React from "react";
// import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageWrapper from '../PageWrapper/PageWrapper';

function Root() {
  return (
    <>
      <Header />
      <PageWrapper />
      <Footer />
    </>
  );
}

export default Root;