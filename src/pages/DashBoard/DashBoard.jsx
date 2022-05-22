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


      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div class="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
        </div>

        <div className='drawer-side'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <ActiveLink to='/'>Sidebar Item 1</ActiveLink>
            </li>
            <li>
              <ActiveLink to='/'>Sidebar Item 2</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
