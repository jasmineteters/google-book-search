import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SavePage from './Pages/Save';
import SearchPage from './Pages/Search';
import Footer from './components/Footer';
import BookSearch from './components/BookSearch';

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
