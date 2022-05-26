import React from 'react'

const Banner = () => {
  return (
    <div className='box md:grid grid-cols-2 items-center'>
      <div className='hidden md:block'>
        <p className='text-4xl font-semibold'>対馬 生産 <span className='font-normal'>|</span> </p>
        <p className='text-4xl font-semibold'>Tsushima Production</p>
        <p>World famous japan based cycle parts maufacturer</p>
      </div>
      <img src='https://i.ibb.co/s9szmmk/banner.webp' className='h-[300px] md:h-[400px] xl:h-[500px] object-cover transition-all duration-200' alt='' />
    </div>
  )
}

export default Banner
