import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='h-[80vh] grid justify-items-center items-center w-3/5 md:w-3/5 xl:w-1/5 mx-auto'>
      <div>
        <h2 className='text-4xl font-medium mb-4'>Whoops! something went wrong</h2>
        <p>The page your looking for is currently unavailable. May be you searched for the wrong route. Dont worry you can signout from here or feel free to navigate to home page.</p>
        <button className='mt-4 cta cta-primary w-fit signout' onClick={() => {
          signOut(auth)
          navigate('/')
        }}>sign out</button>
      </div>
    </div>
  );
};

export default NotFound;