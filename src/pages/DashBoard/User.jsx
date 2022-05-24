import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { axiosPrivate } from '../../api/axiosPrivate'
import { AiTwotoneCrown } from 'react-icons/ai'
import ModalAdmin from '../../components/ModalAdmin'

const User = ({ user, refetch }) => {
  const { name, email, admin, _id } = user

  const [makeAdmin, setMakeAdmin] = useState(false)

  const handleAdmin = () => {
    if (makeAdmin) {
      axiosPrivate.patch(`/user?email=${email}`).then((res) => {
        if (res?.data?.acknowledged) {
          toast.success(`${name} promoted to admin`)
          refetch()
          setMakeAdmin(false)
        }
      })
    }
  }

  return (
    <div className='grid grid-cols-4 border-b justify-items-center items-center p-3'>
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
          <label htmlFor='modal-admin' className='cta cta-primary w-fit cursor-pointer' onClick={() => setMakeAdmin(true)}>
            make admin
          </label>
        )}
      </div>
      {
        makeAdmin &&
        <ModalAdmin handleAdmin={handleAdmin}></ModalAdmin>
      }
    </div>
  )
}

export default User
