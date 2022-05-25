import React from 'react';
import { useQuery } from 'react-query';
import { axiosPrivate } from '../../api/axiosPrivate';
import ManageSingleOrder from './ManageSingleOrder';

const ManageOrder = () => {
  const { data: orders, isLoading, refetch } = useQuery('placedOrders', () => axiosPrivate('/order/all').then((res) => res.data))
  if (isLoading) return

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-max'>
        <thead>
          <tr className='bg-slate-200'>
            <th className='px-8 py-3'>Product</th>
            <th className='px-8 py-3'>Product Id</th>
            <th className='px-8 py-3'>Buyer</th>
            <th className='px-8 py-3'>Contact</th>
            <th className='px-8 py-3'>Ordered quantity</th>
            <th className='px-8 py-3'>Total payment</th>
            <th className='px-8 py-3'>Payment status</th>
            <th className='px-8 py-3'>Confirm</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) => <ManageSingleOrder key={order._id} order={order} refetch={refetch}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;