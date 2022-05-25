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
    <>
      <tr className='border-b'>
        <td className='px-8 py-3'>{name}</td>
        <td className='px-8 py-3'>{email}</td>
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

        <td className='px-8 py-3'>
          {admin ? (
            <button className='cta cta-secondary w-fit '>manage</button>
          ) : (
            <label htmlFor='modal-admin' className='cta cta-primary w-fit cursor-pointer' onClick={() => setMakeAdmin(true)}>
              make admin
            </label>
          )}
        </td>
      </tr>
      {
        makeAdmin &&
        <ModalAdmin handleAdmin={handleAdmin}></ModalAdmin>
      }
    </>
  )
}

export default User
