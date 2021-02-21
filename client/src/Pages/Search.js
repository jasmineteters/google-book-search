import React from 'react';
import Banner from '../components/Banner';
import BookSearch from '../components/BookSearch';
import Card from '../components/Card/SearchCard';

import SaveNavbar from '../components/Navbar/SaveNav';

const SearchPage = () => {
  return (
    <>
      <SaveNavbar />
      <Banner />
      <BookSearch />
      <Card />
    </>
  );
};

export default SearchPage;
