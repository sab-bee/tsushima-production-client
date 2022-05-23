import React from 'react'

const AllUser = ({ user }) => {
  const { name, email, admin, _id } = user
  return (
    <div className='grid grid-cols-4 border-b justify-items-center items-center'>
      <p>{name}</p>
      <p>{email}</p>
      <p>{admin ? 'admin' : 'user'}</p>
      <div>
        {admin ? (
          <button className='cta cta-danger w-fit '>demote</button>
        ) : (
          <button className='cta cta-primary w-fit'>make admin</button>
        )}
      </div>
    </div>
  )
}

export default AllUser
