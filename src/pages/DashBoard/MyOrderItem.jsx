import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosPrivate } from '../../api/axiosPrivate'
import Modal from '../../components/Modal'

const MyOrderItem = ({ orderedItem, refetch }) => {
  const { productName, totalPrice, productQuantity, paid, _id, transactionId } =
    orderedItem
  const [cancel, setCancel] = useState(false)
  // const [paymentDetail, setPaymentDetail] = useState('')

  const handleCancelOrder = () => {
    if (!paid && cancel) {
      axiosPrivate.delete(`/order?id=${_id}`).then(() => {
        refetch()
        setCancel(false)
      })
    }
  }

  return (
    <>
      <div className='grid grid-cols-6 items-center justify-items-center p-3 border-b'>
        <h2>{productName}</h2>
        <h2>{productQuantity}</h2>
        <h2>$ {totalPrice}</h2>
        <span
          className={`${
            paid ? 'badge-success' : 'badge-danger'
          } text-center w-fit`}
        >
          {paid ? 'paid' : 'unpaid'}
        </span>
        <div className='space-x-2 col-span-2 flex flex-col md:block w-full text-center'>
          {!paid && (
            <Link
              className='bg-secondary cta text-white hover:bg-secondaryDark w-fit'
              to={`/payment/${_id}`}
            >
              Pay now
            </Link>
          )}
          {!paid ? (
            <label
              onClick={() => setCancel(true)}
              htmlFor='my-modal-3'
              className='modal-button cta cta-danger w-fit cursor-pointer'
            >
              cancel
            </label>
          ) : (
            // <button className='cta cta-primary'>get voucher</button>
            <p className='break-words'>{transactionId}</p>
          )}
        </div>
      </div>
      <Modal handleCancelOrder={handleCancelOrder}></Modal>
    </>
  )
}

export default MyOrderItem
