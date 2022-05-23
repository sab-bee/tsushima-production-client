import React from 'react'
import toast from 'react-hot-toast'
import { axiosPrivate } from '../../api/axiosPrivate'
import { AiTwotoneCrown } from 'react-icons/ai'

const User = ({ user, refetch }) => {
  const { name, email, admin, _id } = user

  const handleAdmin = () => {
    axiosPrivate.patch(`/user?email=${email}`).then((res) => {
      if (res?.data?.acknowledged) {
        toast.success(`${name} promoted to admin`)
        refetch()
      }
    })
  }

  return (
    <div className='grid grid-cols-4 border-b justify-items-center items-center'>
      <p>{name}</p>
      <p>{email}</p>
      {admin ? (
        <p className='badge-warning flex'>
          admin
          <span>
            <AiTwotoneCrown />
          </span>
        </p>
      ) : (
        <p className='badge-neutral'>user</p>
      )}

      <div>
        {admin ? (
          <button className='cta cta-secondary w-fit '>manage</button>
        ) : (
          <button onClick={handleAdmin} className='cta cta-primary w-fit'>
            make admin
          </button>
        )}
      </div>
    </div>
  )
}

export default User
