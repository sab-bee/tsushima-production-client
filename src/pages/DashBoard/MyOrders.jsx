import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { axiosPrivate } from '../../api/axiosPrivate'
import { auth } from '../../firebase/firebase.init'
import MyOrderItem from './MyOrderItem'

const MyOrders = () => {
  const [user] = useAuthState(auth)
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery('myitems', () =>
    axiosPrivate(`/item?email=${user.email}`).then((res) => res.data)
  )

  if (isLoading) return

  return (
    <div>
      <div className='grid grid-cols-5 justify-items-center items-center bg-indigo-200 p-3 font-semibold'>
        <h2>name</h2>
        <h2>quantity</h2>
        <h2>price</h2>
        <h2>status</h2>
        <h2>action</h2>
      </div>
      {items?.map((item) => (
        <MyOrderItem key={item._id} orderedItem={item} refetch={refetch}/>
      ))}
    </div>
  )
}

export default MyOrders
