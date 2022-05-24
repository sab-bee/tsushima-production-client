import React from 'react';

const ModalAdmin = ({ handleAdmin }) => {
  return (
    <div>
      <input type='checkbox' id='modal-admin' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative bg-white'>
          <label
            htmlFor='modal-admin'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-purple-200 text-purple-600 border-none hover:bg-purple-300'
          >
            ✕
          </label>
          <h3 className='text-lg font-semibold text-red-500'>
            Please confirm this process
          </h3>
          <p className='py-4'>
            You are trying to make other user admin. this process can only be undone from database.
          </p>
          <button onClick={handleAdmin} className='cta cta-secondary '>
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdmin;