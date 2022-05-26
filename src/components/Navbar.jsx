import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'
import ActiveLink from './ActiveLink'
import { FiLogOut } from 'react-icons/fi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [user] = useAuthState(auth)
  const location = useLocation()
  const [expand, setExpand] = useState(false)

  const menus = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      hide: !user,
    },
    {
      name: 'Account',
      url: '/account',
      hide: user,
    },
    {
      name: 'Blog',
      url: '/blog',
    },
  ]

  return (
    location.pathname?.includes('account') || (
      <div className='nav-container'>
        <div className='navbar'>
          <div>
            <button onClick={() => setExpand(true)} className='block sm:hidden'>
              <HiMenuAlt1 className='text-xl' />
            </button>
            <Link to='/' className='hidden sm:block text-2xl font-yuji'>
              対馬
            </Link>
          </div>
          <div className='menu-items'>
            {menus.map((menu, index) => {
              return (
                !menu.hide && (
                  <ActiveLink key={index} to={menu.url} >
                    <div className='menu-item'>
                      {menu.name}
                    </div>
                  </ActiveLink>
                )
              )
            })}
          </div>
          <div className='justify-self-end gap-x-2'>
            <h2 className='text-secondary font-semibold'>
              {user?.displayName}
            </h2>
            {!user ? (
              <ActiveLink
                to='/account'
                className='bg-secondary text-white font-semibold px-4 py-2 rounded-full'
              >
                Login
              </ActiveLink>
            ) : (
              <button onClick={() => signOut(auth)} className='text-xl'>
                <FiLogOut />
              </button>
            )}
          </div>
        </div>

        {/* side menu */}
        <div
          className={`${expand ? 'left-0' : '-left-full md:-left-80'
            } w-full md:w-80 h-screen bg-secondary text-white fixed top-0 transition-all ease-in-out duration-700`}
        >
          <button
            className='ml-auto block mr-5 mt-5 text-xl font-bold'
            onClick={() => setExpand(false)}
          >
            <AiOutlineClose />
          </button>
          <div className='flex flex-col gap-y-5'>
            {menus.map((menu, index) => {
              return (
                !menu.hide && (
                  <div key={index} className='menu-items-mobile'>
                    <Link
                      key={index}
                      to={menu.url}
                      className='menu-item-mobile'
                      onClick={() => setExpand(false)}
                    >
                      {menu.name}
                    </Link>
                  </div>
                )
              )
            })}
          </div>
        </div>
      </div>
    )
  )
}

export default Navbar
