
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../../components/Modal'

const MyOrderItem = ({ orderedItem, refetch }) => {
  const { productName, totalPrice, productQuantity, paid, _id, transactionId } =
    orderedItem
  const [cancel, setCancel] = useState(false)

  return (
    <tr className='border-b'>
      <td className='py-3 px-8 '>{productName}</td>
      <td className='py-3 px-8 '>{productQuantity}</td>
      <td className='py-3 px-8 '>$ {totalPrice}</td>
      <td
        className={`${paid ? 'badge-success' : 'badge-danger'
          } text-center w-fit`}
      >
        {paid ? 'paid' : 'unpaid'}
      </td>
      <td className='space-x-2 col-span-2 flex flex-col md:block w-full text-center px-8 py-3'>
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
            htmlFor='my-modal-3'
            onClick={() => setCancel(true)}
            className='modal-button cta cta-danger w-fit cursor-pointer'
          >
            cancel
          </label>
        ) : (
          <p className='break-words'>{transactionId}</p>
        )}
      </td>
      <td className='py-3 px-8'>
        {
          cancel &&
          <Modal orderedItem={orderedItem} refetch={refetch}></Modal>
        }
      </td>
    </tr>
  )
}

export default MyOrderItem
