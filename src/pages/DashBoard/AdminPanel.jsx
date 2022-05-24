import React from 'react'
import { useQuery } from 'react-query'
import { axiosPrivate } from '../../api/axiosPrivate'
import User from './User'

const AdminPanel = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('allUsers', () => axiosPrivate('/user').then((res) => res.data))

  if (isLoading) return

  return (
    <div>
      <div className='grid grid-cols-4 bg-slate-200 font-semibol justify-items-center items-center p-3 font-semibold'>
        <p>Name</p>
        <p>email</p>
        <p>Role</p>
        <p>Action</p>
      </div>
      {users?.map((user) => (
        <User key={user._id} user={user} refetch={refetch} />
      ))}
    </div>
  )
}

export default AdminPanel
