import React from 'react';

function Footer() {
  return (
    <div className='bg-purpleNavy py-5 mt-10 relative w-full'>

        <h4 className='text-white text-xl text-center font-Roboto mb-5'>
          &copy; Jasmine's Book Search Tool
        </h4>

      <div className='flex flex-row bg-oxfordBlue justify-center'>
        <a
          className='fa fa-github m-2 text-white'
          href='https://github.com/jasmineteters'
        >
          {' '}
        </a>
        <a
          className='fa fa-linkedin m-2 text-white'
          href='https://linkedin.com/in/jasmine-teters'
        >
          {' '}
        </a>
        <a
          className='fa fa-envelope m-2 text-white'
          href='mailto:jasmineteters2020@gmail.com'
        >
          {' '}
        </a>
      </div>
    </div>
  );
}

export default Footer;
