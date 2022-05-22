import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'
import ActiveLink from './ActiveLink'
import { FiLogOut } from 'react-icons/fi'
import { HiMenuAlt1 } from 'react-icons/hi'

const menus = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    name: 'Account',
    url: '/account',
  },
  {
    name: 'Get tickets',
    url: '/tickets',
  },
  {
    name: 'purchase',
    url: '/purchase',
  },
]

const Navbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()
  const [expand, setExpand] = useState(false)

  return (
    location.pathname?.includes('account') || (
      
        <div className='nav-container'>
          <div className='navbar'>
            <div>
              <button onClick={() => setExpand(true)}>
                <HiMenuAlt1 className='text-xl' />
              </button>
            </div>
            <div className='col-span-3 justify-around hidden md:flex'>
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.url}
                  className='relative after:content-[""] after:h-[3px] after:w-0 after:bg-secondary after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 ease-in-out font-medium'
                >
                  {menu.name}
                </Link>
              ))}
            </div>
            <div className='justify-self-end '>
              <h2 className='text-secondary font-semibold'>
                {user?.displayName}
              </h2>
              {!user ? (
                <Link
                  to='/account'
                  className='bg-secondary text-white font-semibold px-4 py-2 rounded-full'
                >
                  Login
                </Link>
              ) : (
                <button onClick={() => signOut(auth)} className='text-xl'>
                  <FiLogOut />
                </button>
              )}
            </div>
          </div>
      

        {/* side menu */}
        <div
          className={`${
            expand ? 'left-0' : '-left-full md:-left-72'
          } w-full md:w-72 h-screen bg-secondary text-white fixed top-0 transition-all ease-in-out duration-700`}
        >
          <button
            className='ml-auto block mr-5 mt-5'
            onClick={() => setExpand(false)}
          >
            close
          </button>
          <div className='flex flex-col gap-y-5'>
            {menus.map((menu, index) => (
              <div
                key={index}
                className='w-4/5 mx-auto border-b border-slate-300 text-center'
              >
                <Link
                  to={menu.url}
                  className=' relative after:content-[""] after:h-[2px] after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 ease-in-out'
                  onClick={() => setExpand(false)}
                >
                  {menu.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default Navbar
