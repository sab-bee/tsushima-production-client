import React from 'react'
import { axiosPrivate } from '../api/axiosPrivate'


const Modal = ({ refetch, orderedItem }) => {
  const { paid, _id, } = orderedItem
  const handleCancelOrder = () => {
    if (!paid) {
      axiosPrivate.delete(`/order?id=${_id}`).then(() => {
        refetch()
      })
    }
  }

  return (
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative bg-white'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-purple-200 text-purple-600 border-none hover:bg-purple-300'
          >
            ✕
          </label>
          <h3 className='text-lg font-semibold text-red-500'>
            Are you sure you want to cancel order?
          </h3>
          <p className='my-4'>It will take few seconds to process the cancel order</p>
          <button onClick={handleCancelOrder} className='cta cta-secondary '>
            yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
