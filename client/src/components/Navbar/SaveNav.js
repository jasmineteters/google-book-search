import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home';
import SavePage from '../../Pages/Save';

class SaveNavbar extends Component {
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
                    <Link to='/save' className=''>
                      <p className='pr-3'> Saved</p>
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
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
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
                      to='/save'
                      className='py-2 px-4 mx-3 mr-10 hover:shadow-2xl hover:bg-greyViolet rounded-xl'
                    >
                      Saved
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

export default SaveNavbar;
