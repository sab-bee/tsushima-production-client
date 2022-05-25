
import { useState } from 'react';
import { axiosPrivate } from '../../api/axiosPrivate';
import ConfirmPayModal from '../../components/ConfirmPayModal';

const ManageSingleOrder = ({ order, refetch }) => {
  const { productName, productId, userName, userContact, productQuantity, totalPrice, paid, transactionId, shipped } = order
  const [payModal, setPayModal] = useState(false)

  const handlePay = () => {
    if (payModal) {
      axiosPrivate.patch(`/order/ship?transactionId=${transactionId}`).then((res) => {
        setPayModal(false)
        refetch()
      })
    }
  }

  return (
    <>
      <tr className='text-center border-b'>
        <td className='py-3 px-8'>{productName}</td>
        <td className='py-3 px-8'>{productId}</td>
        <td className='py-3 px-8'>{userName}</td>
        <td className='py-3 px-8'>{userContact}</td>
        <td className='py-3 px-8'>{productQuantity}</td>
        <td className='py-3 px-8'>{totalPrice}</td>
        {
          paid && !shipped && <td className='py-3 px-8'><p className='badge-warning w-fit mx-auto'>pending</p></td>

        }{
          !paid &&
          <td className='py-3 px-8'><p className="badge-danger  w-fit mx-auto ">unpaid</p></td>
        }
        {
          paid && shipped &&
          <td className='py-3 px-8'><p className="badge-success  w-fit mx-auto ">shipped</p></td>
        }
        <td className='py-3 px-8'>
          {
            paid && !shipped &&
            <label htmlFor='pay-modal' className='cta cta-primary cursor-pointer' onClick={() => setPayModal(true)}>confirm</label>
          }
        </td>
      </tr>
      {
        payModal &&
        <ConfirmPayModal handlePay={handlePay}></ConfirmPayModal>
      }
    </>
  );
};

export default ManageSingleOrder;