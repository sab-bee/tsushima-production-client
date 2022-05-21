import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'
import ActiveLink from './ActiveLink'
import { FiLogOut } from 'react-icons/fi'

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
  return (
    location.pathname?.includes('account') || (
      <div className='navbar bg-base-100 sticky top-0 z-10 px-32 h-20'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {menus.map((menu, index) => (
                <li key={index} className=''>
                  <ActiveLink to={menu.url}>{menu.name}</ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <ActiveLink to='/' className='btn btn-ghost normal-case text-xl'>
            Tsushima
          </ActiveLink>
        </div>
        {
          //user logo
        }
        <div className='navbar-end'>
          {!user ? (
            <button
              className='btn btn-link'
              onClick={() => navigate('/account')}
            >
              Login
            </button>
          ) : (
            <div className='flex items-center gap-x-4'>
              <h2>{user?.displayName}</h2>
              <button
                className='font-xl'
                onClick={() => {
                  signOut(auth)
                  navigate('account')
                }}
              >
                <FiLogOut />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  )
}

export default Navbar
