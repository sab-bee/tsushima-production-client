import React from 'react'
import ActiveLink from '../../components/ActiveLink'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Outlet } from 'react-router-dom'
const DashBoard = () => {
  return (
    <div>
      <label htmlFor='dashboard-sidebar' className='lg:hidden text-4xl'>
        <div className='rounded-full bg-secondary w-10 h-10 grid items-center'>
          <BiRightArrowAlt />
        </div>
      </label>

      <div className='drawer drawer-mobile '>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content flex flex-col'>
          <Outlet></Outlet>
        </div>

        <div className='drawer-side '>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          {/* prettier-ignore */}
          <ul className='menu p-4 overflow-y-auto w-80 text-base-content bg-accent border-r-2 border-secondary'>
            {/* <!-- Sidebar content here --> */}
            <li><ActiveLink to='/dashboard'>My orders</ActiveLink></li>
            <li><ActiveLink to='/dashboard/addReview'>Add review</ActiveLink></li>
            <li><ActiveLink to='/dashboard/myProfile'>My profile</ActiveLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
