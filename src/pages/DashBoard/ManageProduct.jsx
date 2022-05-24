import React from 'react';
import { useParts } from '../../hooks/useParts';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProduct = () => {
  const { parts, refetch, isLoading } = useParts()
  if (isLoading) return

  return (
    <div className=''>
      <div className='grid grid-cols-4 justify-items-center items-center font-semibold p-3 bg-slate-200'>
        <p>Name</p>
        <p>Stock</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      {
        parts?.map((part) => <ManageSingleProduct key={part._id} part={part} refetch={refetch} />)
      }
    </div>
  );
};

export default ManageProduct;