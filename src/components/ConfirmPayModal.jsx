
import React from 'react';

const ConfirmPayModal = ({ handlePay }) => {
  return (
    <div>
      <input type='checkbox' id='pay-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative bg-white'>
          <label
            htmlFor='pay-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-purple-200 text-purple-600 border-none hover:bg-purple-300'
          >
            ✕
          </label>
          <h3 className='text-lg font-semibold text-red-500'>
            Are you sure you want to ship this product
          </h3>
          <p className='py-4'>
            You are going to shipp the order to user.
          </p>
          <button onClick={handlePay} className='cta cta-secondary '>
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayModal;