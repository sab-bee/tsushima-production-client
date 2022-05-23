import ActiveLink from '../../components/ActiveLink'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useAdmin } from '../../hooks/useAdmin'
import { auth } from '../../firebase/firebase.init'
const DashBoard = () => {
  const [user] = useAuthState(auth)

  const {
    admin,
    isLoading,
    isError,
  } = useAdmin(user)
  if (isLoading || isError) return
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
            <li><ActiveLink to='/dashboard'>My orders</ActiveLink></li>
            {
              admin ? <>
                <li><ActiveLink to='/dashboard/adminPanel'>Admin Panel</ActiveLink></li></> :
                <>
                  <li>
                    <ActiveLink to='/dashboard/addReview'>Add review</ActiveLink>
                  </li>
                </>
            }
            <li><ActiveLink to='/dashboard/myProfile'>My profile</ActiveLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
