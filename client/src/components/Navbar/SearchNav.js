import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home';
import SearchPage from '../../Pages/Search';

class SearchNavbar extends Component {
  state = {
    burgerMenu: '',
    navMenu: 'hidden',
  };

  hamburger = () => {
    console.log(this.state);
    if (this.state.navMenu == 'hidden') {
      this.setState({
        navMenu: '',
        burgerMenu: 'hidden',
      });
    } else if (this.state.burgerMenu == 'hidden') {
      this.setState({
        navMenu: 'hidden',
        burgerMenu: '',
      });
    }
  };

  render() {
    return (
      <>
        <header className='p-4 pt-2  laptop:hidden text-white'>
          <nav className='flex justify-between'>
            <div className=''>
              <Link to='/'>
                <img
                  src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613874970/google%20book%20search.png'
                  className='h-52 object-contain object-right transform origin-bottom-left hover:-rotate-12 transition duration-300'
                  alt='JT Web Dev Logo'
                />
              </Link>
            </div>
            <div className='flex'>
              <div className='flex flex-col justify-start my-auto '>
                <svg
                  id='burger'
                  className={`w-10 transform hover:-rotate-180 transition duration-300 ${this.state.burgerMenu}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  onClick={() => this.hamburger()}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='{2}'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </div>
              <div
                id='menu'
                className={`flex flex-col justify-center mr-5 text-right ${this.state.navMenu}`}
              >
                <div className='text-2xl font-thin'>
                  <p className='flex'>
                    <Link to='/search' className=''>
                      <p className='pr-3'> Search</p>
                    </Link>
                    <svg
                      className='w-6 phone:hidden tablet:block'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                  </p>
                </div>
                
              </div>
              <div className='flex flex-col justify-start my-auto'>
                <svg
                  id='x'
                  className={`w-10 flex transform hover:-rotate-90 transition duration-300  ${this.state.navMenu}`}
                  onClick={() => this.hamburger()}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='{2}'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>
          </nav>
        </header>

        <header className='hidden laptop:block flex flex-row '>
          <nav className='flex '>
            <div className='w-1/2'>
              <Link to='/'>
                <img
                  src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613874970/google%20book%20search.png'
                  className='h-52 object-contain object-right transform origin-bottom-left hover:-rotate-12 transition duration-300'
                  alt='Google Book Search'
                />
              </Link>
            </div>
            <div className='flex w-1/2 justify-end items-center'>
              <div id='menu' className='flex flex-row text-right'>
                <div className='text-3xl font-thin text-white '>
                  <p className='flex font-Roboto'>
                    <Link
                      to='/search'
                      className='py-2 px-4 mx-3 hover:shadow-2xl hover:bg-greyViolet rounded-xl'
                    >
                      Search
                    </Link>
                  </p>
                </div>
               
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default SearchNavbar;
