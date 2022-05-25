import React from 'react'
import { useParts } from '../../hooks/useParts'
import SinglePart from './SinglePart'

const Parts = () => {
  const { parts, refetch, isLoading } = useParts(6)
  if (isLoading) return

  return (
    <div className='parts-container'>
      <h2 className='title-center'>parts</h2>
      <div className='part-cols'>
        {parts?.map((part) => (
          <SinglePart key={part._id} part={part} />
        ))}
      </div>
    </div>
  )
}

export default Parts
