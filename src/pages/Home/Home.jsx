import React from 'react'
import { axiosPrivate } from '../../api/axiosPrivate'
import { axiosPublic } from '../../api/axiosPublic'
import Banner from './Banner'
import Parts from './Parts'

const Home = () => {
  const handle = (arg) => {
    // axiosPublic('/').then((res) => console.log(res))
    axiosPrivate('/private')
  }
  return (
    <div className=''>
      <Banner></Banner>
      {/* <button className='btn-primary' onClick={() => handle()}>
        post
      </button> */}
      <Parts></Parts>
    </div>
  )
}

export default Home
