import ActiveLink from '../../components/ActiveLink'
import { Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiOutlineMenu } from "react-icons/ai";
import { useAdmin } from '../../hooks/useAdmin'
import { auth } from '../../firebase/firebase.init'
import { useState } from 'react'

const DashBoard = () => {
  const [user] = useAuthState(auth)
  const [expand, setExpand] = useState(false)
  const {
    admin,
    isLoading,
    isError,
  } = useAdmin(user)
  if (isLoading || isError) return


  return (
    <div>
      <div className={`${expand && 'ml-80'} ml-16 transition-all ease-in-out duration-500`}>
        <Outlet ></Outlet>
      </div>
      <div
        className={`${expand ? 'left-0' : '-left-64'
          } w-80 h-screen bg-white shadow-lg fixed top-0 transition-all ease-in-out duration-500 mt-24`}
      >
        <div className='grid'>
          <button className='justify-self-end text-xl p-5' onClick={() => setExpand(!expand)}><AiOutlineMenu /></button>

          {
            // prettier-ignore
            admin ? <>
              <ActiveLink to='/dashboard/adminPanel'>
                <div className='flex justify-between p-5'>
                  <span>Admin Panel</span>
                  <span>icon</span>
                </div>
              </ActiveLink>

              <ActiveLink to='/dashboard/addProduct'>
                <div className='flex justify-between p-5'>
                  <span>Add Product</span>
                  <span>icon</span>
                </div>
              </ActiveLink>

              <ActiveLink to='/dashboard/manageProduct'>
                <div className='flex justify-between p-5'>
                  <span>Manage Product</span>
                  <span>icon</span>
                </div>
              </ActiveLink>
              <ActiveLink to='/dashboard/manageOrder'>
                <div className='flex justify-between p-5'>
                  <span>Manage Order</span>
                  <span>icon</span>
                </div></ActiveLink>
            </> : <>

              <ActiveLink to='/dashboard/addReview'>
                <div className='flex justify-between p-5'>
                  <span>Add review</span>
                  <span>icon</span>
                </div></ActiveLink>
            </>
          }
        </div>

      </div>
    </div>
  )
}

export default DashBoard
