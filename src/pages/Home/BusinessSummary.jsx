import React from 'react';
import customer from '../../assets/icon/customer.png'
import flag from '../../assets/icon/flag.png'
import feedback from '../../assets/icon/feedback.png'

const BusinessSummary = () => {
  return (
    <div className='bg-white py-12'>
      <h2 className='title-center'>Business Statistic</h2>
      <div className='box'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          <div className='hover:shadow-lg p-8 hover:scale-105 transition-all duration-300 grid justify-items-center gap-y-4'>
            <img src={customer} alt="" />
            <h2 className='text-2xl font-semibold'>215k+</h2>
            <p>Thousands of customers have our continuos support </p>
          </div>
          <div className='hover:shadow-lg p-8 hover:scale-105  transition-all duration-300 grid justify-items-center gap-y-4'>
            <img src={flag} alt="" />
            <h2 className='text-2xl font-semibold'>50+</h2>
            <p>We have braches in 50+ countries around the world </p>
          </div>
          <div className='hover:shadow-lg p-8 hover:scale-105 transition-all duration-300 grid justify-items-center gap-y-4'>
            <img src={feedback} alt="" />
            <h2 className='text-2xl font-semibold'>125k+</h2>
            <p>Millions of users monthly gives us positive feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;