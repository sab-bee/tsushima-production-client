import ActiveTab from '../../components/ActiveTab'
import { Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiOutlineMenu, AiOutlineCluster, AiOutlineStar, AiOutlineTags, AiOutlineUser, AiOutlineAppstoreAdd, AiOutlineNodeExpand } from "react-icons/ai";
import { useAdmin } from '../../hooks/useAdmin'
import { auth } from '../../firebase/firebase.init'
import { useState } from 'react'
import { RiAdminLine } from "react-icons/ri";


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
      <div className={`${expand ? 'ml-80' : 'ml-16'} transition-all ease-in-out duration-500`}>
        <Outlet ></Outlet>
      </div>
      <div
        className={`${expand ? 'left-0' : '-left-64'
          } w-80 h-screen bg-white shadow-lg fixed top-0 transition-all ease-in-out duration-500 mt-24`}
      >
        <div className='grid'>
          <div className='flex justify-between'>
            <h2 className='font-medium p-5'>Dashboard</h2>
            <button className='text-xl active:bg-indigo-200 py-5 px-5 transition-colors' onClick={() => setExpand(!expand)}><AiOutlineMenu /></button>
          </div>
          <ActiveTab to='/dashboard'>
            <div className='flex justify-between p-5'>
              <span>My profile</span>
              <span className='text-xl'><AiOutlineUser /></span>
            </div></ActiveTab>
          {
            // prettier-ignore
            admin ? <>
              <ActiveTab to='/dashboard/adminPanel'>
                <div className='flex justify-between p-5'>
                  <span>Admin Panel</span>
                  <span className='text-xl' title='admin panel'><RiAdminLine /></span>
                </div>
              </ActiveTab>

              <ActiveTab to='/dashboard/addProduct'>
                <div className='flex justify-between p-5'>
                  <span>Add Product</span>
                  <span className='text-xl'><AiOutlineAppstoreAdd /></span>
                </div>
              </ActiveTab>

              <ActiveTab to='/dashboard/manageProduct'>
                <div className='flex justify-between p-5'>
                  <span>Manage Product</span>
                  <span className='text-xl'><AiOutlineNodeExpand /></span>
                </div>
              </ActiveTab>
              <ActiveTab to='/dashboard/manageOrder'>
                <div className='flex justify-between p-5'>
                  <span>Manage Order</span>
                  <span className='text-xl'><AiOutlineCluster /></span>
                </div></ActiveTab>
            </> : <>

              <ActiveTab to='/dashboard/addReview'>
                <div className='flex justify-between p-5'>
                  <span>Add review</span>
                  <span className='text-xl'><AiOutlineStar /></span>
                </div></ActiveTab>
              <ActiveTab to='/dashboard/myOrder'>
                <div className='flex justify-between p-5'>
                  <span>My orders</span>
                  <span className='text-xl'><AiOutlineTags /></span>
                </div></ActiveTab>
            </>
          }

        </div>

      </div>
    </div>
  )
}

export default DashBoard
