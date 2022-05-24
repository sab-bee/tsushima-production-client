import React from 'react';
import { useParts } from '../../hooks/useParts';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProduct = () => {
  const { parts, refetch, isLoading } = useParts()
  if (isLoading) return

  return (
    <div>
      {
        parts?.map((part) => <ManageSingleProduct key={part._id} part={part}/>)
      }
    </div>
  );
};

export default ManageProduct;