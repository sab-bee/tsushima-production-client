import React from 'react';

const FAQ = () => {
  return (
    <div className='w-4/8 md:w-1/2 lg:w-1/5 mx-auto py-12 space-y-4'>
      <h2 className='title-center mb-8'>Fequently Asked Questions</h2>
      <div>
        <h2 className='font-semibold mb-2'>What our business about?</h2>
        <p>Our business is about making premium quality parts for sports and casual bike. Parts like, frame, chain, break, derailleur etc.</p>
      </div>
      <div>
        <h2 className='font-semibold mb-2'>Where our product can be found?</h2>
        <p>Our products are availavle around the world. Anyone can order online or your can get from our offline retailers </p>
      </div>
      <div>
        <h2 className='font-semibold mb-2'>What about security policy?</h2>
        <p>We care about the security. which is out first priority. Check our customer reviews what they say about our security and privacy policy</p>
      </div>
    </div>
  );
};

export default FAQ;