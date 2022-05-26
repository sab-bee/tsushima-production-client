import React from 'react'
import { useParts } from '../../hooks/useParts'
import SinglePart from './SinglePart'

const Parts = () => {
  const { parts, refetch, isLoading } = useParts(6)
  if (isLoading) return

  return (
    <div className='bg-white py-12'>
      <h2 className='title-center my-8'>parts</h2>
      <div className='part-cols'>
        {parts?.map((part) => (
          <SinglePart key={part._id} part={part} />
        ))}
      </div>
    </div >
  )
}

export default Parts
