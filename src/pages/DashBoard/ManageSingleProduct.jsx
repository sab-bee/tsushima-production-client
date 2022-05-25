import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { axiosPrivate } from '../../api/axiosPrivate';
import ModalStock from '../../components/ModalStock';

const ManageSingleProduct = ({ part, refetch }) => {
  const { name, price, availableQuantity, _id } = part
  const [removeItem, setRemoveItem] = useState(false)
  const handleRemoveStock = () => {
    axiosPrivate.delete(`/part?id=${_id}`).then(() => {
      refetch()
      toast.success('product removed')
    })
  }
  return (
    <tr className='border-b'>
      <td className='px-8 py-3'>{name}</td>
      <td className='px-8 py-3'>{availableQuantity}</td>
      <td className='px-8 py-3'>{price}</td>
      <td className='px-8 py-3'><label htmlFor='stock-modal' className='cta cta-danger w-fit cursor-pointer' onClick={() => setRemoveItem(true)}>revove</label></td>
      {
        removeItem && <ModalStock handleRemoveStock={handleRemoveStock}></ModalStock>
      }
    </tr>
  );
};

export default ManageSingleProduct;