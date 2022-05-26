import React from 'react'

const Banner = () => {
  return (
    
    <div className='box bg-fixed min-h-[500px] bg-no-repeat grid items-center justify-items-center bg-cover  '
      style={{ backgroundImage: `url(https://i.ibb.co/s9szmmk/banner.webp)` }} >
      <div className='bg-[rgba(0,0,0,0.51)] h-full w-full text-white grid justify-items-center items-center'>
        <div>
          <p className='text-4xl font-yuji font-semibold'>対馬 生産 <span className='font-normal'>|</span> </p>
          <p className='text-4xl font-semibold'>Tsushima Production</p>
          <p>World famous japan based cycle parts maufacturer</p>
        </div>
      </div>
    </div >
  )
}

export default Banner
