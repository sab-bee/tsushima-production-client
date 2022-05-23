import React from 'react'
import { useQuery } from 'react-query'
import { axiosPrivate } from '../../api/axiosPrivate'
import AllUser from './AllUser'

const AdminPanel = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('allUsers', () => axiosPrivate('/user').then((res) => res.data))

  if (isLoading) return

  const handleAdmin = (isAdmin) => {}

  return (
    <div>
      <div className='grid grid-cols-4 bg-slate-200 justify-items-center items-center p-3'>
        <p>Name</p>
        <p>email</p>
        <p>Role</p>
        <p>Action</p>
      </div>
      {users?.map((user) => (
        <AllUser key={user._id} user={user} refetch={refetch} />
      ))}
    </div>
  )
}

export default AdminPanel
