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
    <div className='overflow-x-auto'>
      <table className='min-w-max'>
        <thead>
          <tr className='bg-slate-200'>
            <th className='px-8 py-3'>Name</th>
            <th className='px-8 py-3'>email</th>
            <th className='px-8 py-3'>Role</th>
            <th className='px-8 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <User key={user._id} user={user} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminPanel
