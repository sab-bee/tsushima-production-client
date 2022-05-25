import React from 'react';
import { useParts } from '../../hooks/useParts';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProduct = () => {
  const { parts, refetch, isLoading } = useParts()
  if (isLoading) return

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-max'>
        <thead className='bg-slate-200'>
          <tr>
            <th className='px-8 py-3'>Name</th>
            <th className='px-8 py-3'>Stock</th>
            <th className='px-8 py-3'>Price</th>
            <th className='px-8 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            parts?.map((part) => <ManageSingleProduct key={part._id} part={part} refetch={refetch} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;