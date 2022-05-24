import React from 'react';

const ModalStock = ({ handleRemoveStock }) => {
  return (
    <div>
      <input type='checkbox' id='stock-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative bg-white'>
          <label
            htmlFor='stock-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-purple-200 text-purple-600 border-none hover:bg-purple-300'
          >
            ✕
          </label>
          <h3 className='text-lg font-semibold text-red-500'>
            Are you sure you want to remove this product?
          </h3>
          <p className='my-4'>Your trying to remove the whole stock of this particular product</p>
          <button onClick={handleRemoveStock} className='cta cta-secondary '>
            yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalStock;