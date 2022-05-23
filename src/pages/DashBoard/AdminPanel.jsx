import React from 'react'
import { useAdmin } from '../../hooks/useAdmin'
import User from './User'

const AdminPanel = () => {
  const { users, isLoading, refetch } = useAdmin()
  if (isLoading) return

  return (
    <div>
      <div className='grid grid-cols-4 bg-slate-200 justify-items-center items-center p-3'>
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
