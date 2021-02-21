import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import BookSearch from './components/BookSearch';

function App() {
  return (
    <div className='bg-theme'>
      <Router>
        <Navbar />
        <Banner/>
        <BookSearch/>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
