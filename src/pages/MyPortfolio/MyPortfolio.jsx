import React from 'react';

const MyPortfolio = () => {
  return (
    <div className='w-4/5 md:w-3/5 lg:w-1/5 mx-auto md:mt-40'>
      <h2 className='text-lg'>Name: Sabbir Ahmed</h2>
      <p>Email: sabbirahmed.sa08@gmail.com</p>
      <p>Education : Brac University</p>
      <p className='my-4'>Skills: react, mongodb, javascript, nodejs, expressjs, css, styled components, tailwind, firebase, framermotion</p>
      <p>Projects : </p>

      <a href="https://fontbey.netlify.app/" className='underline text-blue-400 block w-fit my-2'>fontbey - font search</a>
      <a href="https://offshore-stockroom.web.app/" className='underline text-blue-400 block w-fit my-2'>offshore stockroom - inventory management</a>
      <a href="https://stunning-meringue-5e330c.netlify.app/" className='underline text-blue-400 block w-fit my-2'>wrist watch - watch online shop</a>


      <p></p>
      <ul>

      </ul>

    </div>
  );
};

export default MyPortfolio;