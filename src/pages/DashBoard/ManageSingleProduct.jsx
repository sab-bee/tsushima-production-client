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
    <div className='grid grid-cols-4 justify-items-center items-center p-2 border-b'>
      <h2>{name}</h2>
      <h2>{availableQuantity}</h2>
      <h2>{price}</h2>
      <label htmlFor='stock-modal' className='cta cta-danger w-fit cursor-pointer' onClick={() => setRemoveItem(true)}>revove</label>
      {
        removeItem && <ModalStock handleRemoveStock={handleRemoveStock}></ModalStock>
      }
    </div>
  );
};

export default ManageSingleProduct;