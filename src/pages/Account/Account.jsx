import React from 'react'
import { Outlet } from 'react-router-dom'

const Account = () => {
  return (
    <div>
      <h2>user account page</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default Account
