import React from 'react';
import Banner from '../components/Banner';
import BookSearch from '../components/BookSearch';
import SearchCard from '../components/Card/SearchCard';

import SaveNavbar from '../components/Navbar/SaveNav';

const SearchPage = () => {
  return (
    <>
      <SaveNavbar />
      <Banner />
      <BookSearch />
      <SearchCard />
    </>
  );
};

export default SearchPage;
