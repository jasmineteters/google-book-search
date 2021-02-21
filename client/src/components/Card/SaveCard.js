import React from 'react';

function SaveCard() {
  return (
    <div className='mx-auto px-4 py-8  my-20 flex flex-col tablet:flex-row tablet:justify-center flex-wrap'>
      <div className='bg-white shadow-2xl rounded-lg mb-6 tracking-wide tablet:w-2/3 laptop:w-1/3 desktop:w-1/4 mx-10'>
        <div className='md:flex-shrink-0'>
          <img
            src='https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg'
            alt='mountains'
            className='w-full h-64 rounded-lg rounded-b-none'
          />
        </div>
        <div className='px-4 py-2 mt-2'>
          <h2 className='font-bold text-2xl text-gray-800 tracking-normal'>
            Book Title
          </h2>
          <p className='text-sm text-gray-700 px-2 mr-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            reiciendis ad architecto at aut placeat quia, minus dolor
            praesentium officia maxime deserunt porro amet ab debitis deleniti
            modi soluta similique
          </p>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col justify-end ml-3 my-3 mt-5'>
              <h2 className='text-sm tracking-tighter text-gray-900'>
                <a href='#'>By Author</a>{' '}
              </h2>
              <h2 className='text-gray-600 text-sm'>Published</h2>
            </div>
            <div className='flex flex-col tablet:flex-row my-2'>
              <button className=''>
                <p className='mx-1 mt-2 px-4 py-0 bg-greyViolet rounded-md text-white'>
                  Delete
                </p>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveCard;
