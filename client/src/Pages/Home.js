import React from 'react';
import Banner from '../components/Banner';
import BookSearch from '../components/BookSearch';

import Navbar from '../components/Navbar/HomeNav';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BookSearch/>

    </>
  );
};

export default Home;
