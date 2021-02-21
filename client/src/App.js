import React from 'react';
import Navbar from './components/Navbar/HomeNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import BookSearch from './components/BookSearch';
import Results from './components/Results';
import Card from './components/Card/SearchCard';
import Home from './Pages/Home';
import SavePage from './Pages/Save';
import SearchPage from './Pages/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-theme'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/save' component={SavePage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
