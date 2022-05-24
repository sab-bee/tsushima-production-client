import React from 'react';

const ManageSingleOrder = ({ order }) => {
  const { productName, productId, userName, userContact, productQuantity, totalPrice, paid, transactionId } = order
  return (
    <tr className='text-center border-b'>
      <td className='py-3 px-8'>{productName}</td>
      <td className='py-3 px-8'>{productId}</td>
      <td className='py-3 px-8'>{userName}</td>
      <td className='py-3 px-8'>{userContact}</td>
      <td className='py-3 px-8'>{productQuantity}</td>
      <td className='py-3 px-8'>{totalPrice}</td>
      {
        paid ? <td className='py-3 px-8'><p className='badge-success w-fit mx-auto'>paid</p></td> :
          <td className='py-3 px-8'><p className="badge-danger  w-fit mx-auto ">unpaid</p></td>
      }
    </tr>


  );
};

export default ManageSingleOrder;