import React from 'react'


const Modal = ({ handleCancelOrder }) => {
  return (
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-purple-200 text-purple-600 border-none hover:bg-purple-300'
          >
            ✕
          </label>
          <h3 className='text-lg font-semibold text-red-500'>
            Are you sure you want to cancel order?
          </h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <button onClick={handleCancelOrder} className='cta cta-secondary '>
            yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
