import React from 'react';
import Banner from '../components/Banner';
import SaveCard from '../components/Card/SaveCard';
import SearchNavbar from '../components/Navbar/SearchNav';

const SavePage = () => {
  return (
    <>
      <SearchNavbar />
      <Banner />

      <SaveCard />
    </>
  );
};

export default SavePage;
